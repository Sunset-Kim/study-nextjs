import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    if (!email || !feedback) {
      res.status(400).json({ error: "bad Rquest" });
    }

    const newFeed = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const file = fs.readFileSync(filePath);
    const data = JSON.parse(file);

    console.log("data :", data);

    data.push(newFeed);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Suces", result: newFeed });
  } else {
    res.status(400);
  }
}
