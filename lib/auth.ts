import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const dataUrl: string | undefined = process.env.DATA_BASE_URL as string
const client = new MongoClient(dataUrl);
const db = client.db("userInfo");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  },
});