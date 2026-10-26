import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import UserWidget from './UserWidget'

export default function Header() {
  return (
    <header className="site-header">
      <div className="announcement">Herramientas para llegar siempre más lejos <span>⚽</span> Atención de barrio, pasión argentina</div>
      <div className="header-main wrap">
        <Link className="brand" to="/" aria-label="FerreteríaEl10, inicio">
          <span className="brand-mark">10</span>
          <span>Ferretería<span className="brand-light">El10</span><small>HERRAMIENTAS CON PASIÓN</small></span>
        </Link>
        <div className="header-side">
          <p className="header-note">Como Diego: garra,<br />talento y trabajo.</p>
          <UserWidget />
        </div>
      </div>
      <div className="nav-wrap"><div className="wrap"><NavBar /></div></div>
    </header>
  )
}
