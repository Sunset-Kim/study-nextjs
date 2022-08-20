import { MongoClient, ServerApiVersion } from "mongodb";
import app_config from "../config";

async function dbConnect() {
  const uri = `mongodb+srv://test:${app_config.db.password}@cluster0.b3sw1.mongodb.net/?retryWrites=true&w=majority`;

  const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  return await mongoClient.connect();
}

const insertDocument = async (client, document) => {
  const db = client.db("test");
  await db.collection("comments").insertOne(document);
};

const getAllDocuemnts = async (client, collectionName, sort, filter = {}) => {
  const collection = client.db("test").collection(collectionName);
  return await collection.find(filter).sort(sort).toArray();
};

export { dbConnect, insertDocument, getAllDocuemnts };
