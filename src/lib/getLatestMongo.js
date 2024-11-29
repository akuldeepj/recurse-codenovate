'use server'

import { MongoClient } from 'mongodb'

export async function getLatestDateFromMongo() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MongoDB URI is not defined')
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db('db')
    const collection = database.collection('dates')

    const latestDate = await collection.findOne({}, { sort: { date: -1 } })

    return latestDate ? latestDate.date : null
  } catch (error) {
    console.error('Error fetching date from MongoDB:', error)
    return null
  } finally {
    await client.close()
  }
}

