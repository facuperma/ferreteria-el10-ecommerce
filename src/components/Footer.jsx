const team = [
  { initials: 'DM', name: 'Diego Maradona', role: 'Mediocampista · capitán' },
  { initials: 'JV', name: 'Jorge Valdano', role: 'Delantero titular' },
  { initials: 'OR', name: 'Oscar Ruggeri', role: 'Defensor titular' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-about">
          <span className="footer-logo">FerreteríaEl10</span>
          <p>Todo para arreglar, construir y meterle garra a cada proyecto. Un homenaje al talento y la pasión de Diego Armando Maradona.</p>
          <p className="footer-contact">La Paternal, Buenos Aires, Argentina<br />hola@ferreteriael10.com · Lun a sáb, 8 a 19 h</p>
        </div>
        <div className="team-section">
          <p className="eyebrow">CREADORES DE LA PÁGINA · MÉXICO 1986</p>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.initials}>
                <span className="team-avatar">{person.initials}</span>
                <div><strong>{person.name}</strong><span>{person.role}</span></div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="wrap"><span>© 2026 FerreteríaEl10 · Proyecto académico</span><span>Con pasión y trabajo argentino · Homenaje a Diego Armando Maradona</span></div></div>
    </footer>
  )
}
