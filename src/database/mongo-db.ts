import { Db, MongoClient } from 'mongodb'

export class Database {
  private static instance: Database;
  private db:Db | null = null;

  private constructor(db: Db) {
    this.db = db
  }

  public static async getInstance(): Promise<Database> {
    if (!Database.instance) {
      const uri = process.env.MONGO_URI;
      const client = await MongoClient.connect(uri as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const dbName = uri?.split('/').pop();
      const db = client.db(dbName);
      Database.instance = new Database(db);
      Database.instance.db = db;
    }
    return Database.instance;
  }

  public getDb(): Db {
    if (!this.db) {
      throw new Error('Database not initialized');
    }
      return this.db;
    }
}