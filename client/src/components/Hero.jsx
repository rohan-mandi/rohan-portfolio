export default function Hero({ profile }) {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${profile.hero})` }} aria-hidden />
      <div className="hero__scrim" aria-hidden />
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="dot" /> Available for Fall 2026 internships
        </p>
        <h1 className="hero__title">
          {profile.name.split(" ")[0]}{" "}
          <span className="hero__title-accent">{profile.name.split(" ")[1]}</span>
        </h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">
            See my work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
        <div className="hero__meta">
          <a href={profile.links.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <span aria-hidden>·</span>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <span aria-hidden>·</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
