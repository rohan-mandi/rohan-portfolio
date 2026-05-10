import { portfolio } from "../server/data.js";

export default function handler(_req, res) {
  res.status(200).json(portfolio);
}
