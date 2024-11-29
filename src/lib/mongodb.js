import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

// Load environment variables from .env
// dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {};

// Ensure the MongoDB URI is provided
if (!uri) {
  throw new Error("Please add your MongoDB URI to your .env file");
}

// Initialize the MongoDB client
let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
