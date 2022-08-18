import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "data", "email.json");

export default async function subscribe(req, res) {
  if (req.method === "POST") {
    try {
      const eamilFile = await fs.readFile(filePath, "utf-8");
      const jsonResult = JSON.parse(eamilFile);
      jsonResult.push(req.body);
      await fs.writeFile(filePath, JSON.stringify(jsonResult));

      res.status(201).json(jsonResult);
    } catch {
      const newContent = [req.body];
      fs.writeFile(filePath, JSON.stringify(newContent), (err) => {
        if (err) {
          console.error(err);
        }
        console.log("완료");
      });
    }
  } else {
    res.status(400).send();
  }
}
