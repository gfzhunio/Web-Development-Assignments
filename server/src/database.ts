import { MongoClient } from "mongodb";

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.qex5b9k.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const database = client.db("activa");

export const Collection = {
  user: database.collection("user"),
  workout: database.collection("workout"),
};

console.log("Connected to MongoDB!");
