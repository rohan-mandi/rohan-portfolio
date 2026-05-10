import { useState } from "react";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ kind: "idle", text: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ kind: "loading", text: "Sending..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      setStatus({ kind: "ok", text: "Thanks — your message is in. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ kind: "err", text: err.message });
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section__head">
        <span className="section__num">07</span>
        <h2 className="section__title">Get in touch</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__copy">
          <p className="lede">
            I'm always happy to chat about software, research, or martial arts. Drop a note here or
            reach me directly.
          </p>
          <ul className="contact__list">
            <li>
              <span className="muted">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="muted">GitHub</span>
              <a href={profile.links.github} target="_blank" rel="noreferrer noopener">
                github.com/rohan-mandi
              </a>
            </li>
            <li>
              <span className="muted">LinkedIn</span>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener">
                linkedin.com/in/rohan-mandi
              </a>
            </li>
            <li>
              <span className="muted">Location</span>
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="What's on your mind?"
            />
          </label>
          <button className="btn btn--primary" disabled={status.kind === "loading"}>
            {status.kind === "loading" ? "Sending..." : "Send message"}
          </button>
          {status.kind !== "idle" && status.kind !== "loading" && (
            <p className={`form__status form__status--${status.kind}`}>{status.text}</p>
          )}
        </form>
      </div>
    </section>
  );
}
