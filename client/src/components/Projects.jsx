import Slideshow from "./Slideshow.jsx";

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 3h7v7" />
      <path d="M21 3l-9 9" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.8-5.8 7.8-10.8C23.4 5.6 18.3.5 12 .5z" />
    </svg>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="section__head">
        <span className="section__num">03</span>
        <h2 className="section__title">Projects</h2>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <div className="project__media-stack">
              {p.image && (
                <div className="project__media">
                  <img src={p.image} alt={`${p.name} — screenshot`} loading="lazy" />
                </div>
              )}
              {p.gallery?.length > 0 && (
                <div className="project__gallery">
                  <p className="project__gallery-label">Team & event photos</p>
                  <Slideshow images={p.gallery} positions={p.galleryPositions} alt={`${p.name} team photo`} />
                </div>
              )}
            </div>

            <div className="project__body">
              <header className="project__head">
                <h3>{p.name}</h3>
                <span className="muted">{p.period}</span>
              </header>

              <p className="project__blurb">{p.blurb}</p>

              <ul className="card__bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>

              {p.tags && (
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}

              {(p.links?.live || p.links?.repo) && (
                <div className="project__links">
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn--primary btn--sm"
                    >
                      <ExternalIcon /> Live site
                    </a>
                  )}
                  {p.links.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn--ghost btn--sm"
                    >
                      <GithubIcon /> Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
