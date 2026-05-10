import { portfolio } from "../../server/data.js";

export default function handler(req, res) {
  const { section } = req.query;
  if (section in portfolio) {
    res.status(200).json(portfolio[section]);
  } else {
    res.status(404).json({ error: `Unknown section: ${section}` });
  }
}
