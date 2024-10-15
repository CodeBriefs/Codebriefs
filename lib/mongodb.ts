import { MongoClient, Db } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  try {
    const client = await clientPromise
    const db = client.db()
    return { client, db }
  } catch (error) {
    console.error('Failed to connect to the database', error)
    throw new Error('Unable to connect to the database')
  }
}