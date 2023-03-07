import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI as string

export const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })