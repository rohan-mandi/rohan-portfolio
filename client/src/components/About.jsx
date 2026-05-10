export default function About({ about, profile, education }) {
  return (
    <section id="about" className="section about">
      <div className="section__head">
        <span className="section__num">01</span>
        <h2 className="section__title">About</h2>
      </div>

      <div className="about__grid">
        <div className="about__copy">
          {about.blurb.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about__edu">
            <h3>Education</h3>
            {education.map((e) => (
              <div key={e.school} className="edu">
                <div className="edu__row">
                  <strong>{e.school}</strong>
                  <span className="muted">{e.period}</span>
                </div>
                <div className="muted">{e.degree} · {e.location}</div>
                <ul>
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="about__side">
          <figure className="portrait">
            <img src={profile.portrait} alt={`Portrait of ${profile.name}`} loading="lazy" />
          </figure>
        </aside>
      </div>

      <ul className="highlights highlights--row">
        {about.highlights.map((h) => (
          <li key={h.label}>
            <span className="highlights__label">{h.label}</span>
            <span className="highlights__detail">{h.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
