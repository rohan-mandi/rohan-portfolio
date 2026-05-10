export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__num">04</span>
        <h2 className="section__title">Work Experience</h2>
      </div>

      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.org} className="timeline__item">
            <div className="timeline__dot" aria-hidden />
            <div className="timeline__body">
              <header className="timeline__head">
                <h3>
                  {e.role} <span className="muted">— {e.org}</span>
                </h3>
                <p className="card__meta">
                  <span>{e.period}</span>
                  <span aria-hidden>·</span>
                  <span>{e.location}</span>
                </p>
              </header>
              <ul className="card__bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
