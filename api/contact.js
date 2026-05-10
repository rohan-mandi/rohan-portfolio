export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are required" });
  }

  console.log(`[contact] ${new Date().toISOString()} from ${name} <${email}>: ${message}`);
  res.status(200).json({ ok: true, received: true });
}
