import { dbConnect, getAllDocuemnts, insertDocument } from "../../../helpers/db-util";

export default async function commentController(req, res) {
  const { eventId } = req.query;
  if (!eventId) {
    res.status(422).json({ message: "잘못된 URI" });
    return;
  }

  if (req.method === "GET") {
    let client;

    try {
      client = await dbConnect();
    } catch (error) {
      res.status(500).json({ message: "server connect error" });
    }

    try {
      const result = await getAllDocuemnts(client, "comments", { _id: -1 }, { eventId });
      client.close();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: "read data error" });
    }

    client.close();
  } else if (req.method === "POST") {
    const { name, email, text } = req.body;

    if (!email || !name || !text) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
      updateAt: new Date(),
    };
    let client;
    try {
      client = await dbConnect();
    } catch {
      res.status(500).json({ message: "server error" });
      return;
    }

    try {
      await insertDocument(client, newComment);
      client.close();
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: "insert error" });
    }

    client.close();
  }
}
