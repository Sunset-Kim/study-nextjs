import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(filePath) {
  const file = fs.readFileSync(filePath);
  return JSON.parse(file);
}

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

    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    data.push(newFeed);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Suces", result: newFeed });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
