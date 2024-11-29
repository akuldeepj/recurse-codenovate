'use server'

import { MongoClient } from 'mongodb'

export async function saveDateToMongo(date: string) {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MongoDB URI is not defined')
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('db')    
    const collection = database.collection('dates')

    await collection.insertOne({ date })

    return { success: true, message: 'Date saved successfully' }
  } catch (error) {
    console.error('Error saving date to MongoDB:', error)
    return { success: false, message: 'Failed to save date' }
  } finally {
    await client.close()
  }
}

