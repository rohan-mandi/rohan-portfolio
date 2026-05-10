export default function Leadership({ leadership }) {
  return (
    <section id="leadership" className="section">
      <div className="section__head">
        <span className="section__num">05</span>
        <h2 className="section__title">Leadership & Activities</h2>
      </div>

      <div className="leadership">
        {leadership.map((l) => (
          <article key={l.org + l.role} className="lead-card">
            {l.image && (
              <div className="lead-card__media">
                <img src={l.image} alt={`${l.org}`} loading="lazy" />
              </div>
            )}
            <div className="lead-card__body">
              <header>
                <h3>{l.role}</h3>
                <p className="card__org">{l.org}</p>
                <p className="card__meta">
                  <span>{l.period}</span>
                  <span aria-hidden>·</span>
                  <span>{l.location}</span>
                </p>
              </header>
              <ul className="card__bullets">
                {l.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {l.link && (
                <a
                  className="lead-card__link"
                  href={l.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {l.link.label} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
