import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import FooterComponent from "@/components/ui/footer";
import GridPattern from "@/components/ui/grid-pattern";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/header";
import FloatingDockBar from "@/components/dock";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Recurse - Codenovate",
  description: "Codenovate is recurse's open hackathon",
};

const myFont = localFont({
  src: "../../fonts/CalSans-SemiBold.woff2",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Your Website Title</title>
        <link rel="icon" href="/codenovatewhite.png" type="image/x-icon" />
        <meta property="og:title" content="Recurse - Codenovate" />
        <meta property="og:description" content="Codenovate is recurse's 24 hours open hackathon at keshav memorial institue of technology (KMIT)" />
        <meta property="og:image" content="/codenovatewhite.png" />
        <meta property="og:url" content="https://www.codenovate.tech" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${myFont.className} antialiased bg-gray-50 text-gray-950 relative dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Header />
          <FloatingDockBar />
            {children}
            <Analytics />
            <FooterComponent />
          </ThemeProvider>     
          </body>
    </html>
  );
}
