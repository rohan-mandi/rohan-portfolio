export default function Research({ research }) {
  return (
    <section id="research" className="section">
      <div className="section__head">
        <span className="section__num">02</span>
        <h2 className="section__title">Research</h2>
      </div>

      <div className="cards">
        {research.map((r) => (
          <article key={r.org} className="card card--research">
            <header className="card__head">
              <h3>{r.role}</h3>
              <p className="card__org">{r.org}</p>
              <p className="card__meta">
                <span>{r.period}</span>
                <span aria-hidden>·</span>
                <span>{r.location}</span>
              </p>
            </header>
            <ul className="card__bullets">
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {r.stack && (
              <div className="chips">
                {r.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
