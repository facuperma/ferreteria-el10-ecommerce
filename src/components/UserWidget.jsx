import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthStore'

export default function UserWidget() {
  const { user, logout } = useAuth()

  if (user) {
    return (
      <div className="user-widget">
        <span className="user-greeting">Hola, <strong>{user.name}</strong></span>
        <button type="button" onClick={logout}>Salir</button>
      </div>
    )
  }

  return (
    <div className="user-widget">
      <NavLink to="/ingresar">Ingresar</NavLink>
      <NavLink className="user-register" to="/registro">Registrarse</NavLink>
    </div>
  )
}
