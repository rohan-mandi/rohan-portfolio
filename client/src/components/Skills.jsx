export default function Skills({ skills, certifications }) {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__num">06</span>
        <h2 className="section__title">Skills & Certifications</h2>
      </div>

      <div className="skills">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills__group">
            <h3>{category}</h3>
            <div className="chips">
              {items.map((s) => (
                <span key={s} className="chip chip--solid">{s}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="skills__group">
          <h3>Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
