import { MongoClient, ServerApi, ServerApiVersion } from "mongodb";
import app_config from "../../../config";

const uri = `mongodb+srv://test:${app_config.db.password}@cluster0.b3sw1.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export default async function subscribe(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      await client.connect();
      const db = client.db();
      await db.collection("emails").insertOne({ email });

      client.close();
    } catch {
      res.status(500).json({ message: "db error" });
    }

    res.status(201).json({ email });
  } else {
    res.status(400).send();
  }
}
