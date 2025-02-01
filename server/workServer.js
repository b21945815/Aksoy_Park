import express from "express";
import fs from "fs-extra";
import { parseString } from "xml2js";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());

const FILE_PATH = "./server/images.xml";

async function parseXML(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

app.get("/images", async (req, res) => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const json = await parseXML(data);
    res.json(json.images?.image || []); 
  } catch (error) {
    console.error("Error reading XML file:", error);
    res.status(500).json({ error: "Error reading XML file" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
