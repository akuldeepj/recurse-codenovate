import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("db");

        // Find user
        const user = await db.collection("users").findOne({ email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        // Return user object (without sensitive info)
        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { id: token.id, ...session.user };
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

// Properly export the handler for the GET and POST HTTP methods
export const GET = handler;
export const POST = handler;
