import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { portfolio } from "./data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "..", "images")));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "rohan-portfolio", time: new Date().toISOString() });
});

app.get("/api/portfolio", (_req, res) => {
  res.json(portfolio);
});

app.get("/api/portfolio/:section", (req, res) => {
  const { section } = req.params;
  if (section in portfolio) {
    res.json(portfolio[section]);
  } else {
    res.status(404).json({ error: `Unknown section: ${section}` });
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }
  console.log(`[contact] ${new Date().toISOString()} from ${name} <${email}>: ${message}`);
  res.json({ ok: true, received: true });
});

const clientDist = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientDist));
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"), (err) => {
    if (err) res.status(404).end();
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio API listening on http://localhost:${PORT}`);
});
