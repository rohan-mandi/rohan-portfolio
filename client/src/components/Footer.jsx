export default function Footer({ profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="muted">Software Engineering · University of Western Ontario</p>
        </div>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
        <p className="footer__small muted">© {year} {profile.name}. Built with React + Express.</p>
      </div>
    </footer>
  );
}
