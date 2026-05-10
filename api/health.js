export default function handler(_req, res) {
  res.status(200).json({ ok: true, service: "rohan-portfolio", time: new Date().toISOString() });
}
