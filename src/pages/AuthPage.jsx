import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthStore'

const emptyForm = { name: '', email: '', password: '', confirm: '' }

export default function AuthPage({ mode }) {
  const isRegister = mode === 'registro'
  const { user, login, register, logout } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (isRegister && form.password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres.')
    if (isRegister && form.password !== form.confirm) return setError('Las contraseñas no coinciden.')
    try {
      if (isRegister) register(form)
      else login(form)
      navigate('/')
    } catch (authError) {
      setError(authError.message)
    }
  }

  if (user) {
    return (
      <section className="auth-section wrap">
        <div className="auth-card">
          <p className="eyebrow">FERRETERÍA EL10 · MI CUENTA</p>
          <h1>Hola, {user.name}<span>.</span></h1>
          <p className="auth-lead">Ya iniciaste sesión con {user.email}.</p>
          <div className="auth-actions">
            <Link className="button button-dark" to="/">Ver catálogo <span>↗</span></Link>
            <button className="auth-secondary" type="button" onClick={logout}>Cerrar sesión</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-section wrap">
      <div className="auth-card">
        <nav className="auth-tabs" aria-label="Acceso a tu cuenta">
          <NavLink to="/ingresar">Ingresar</NavLink>
          <NavLink to="/registro">Crear cuenta</NavLink>
        </nav>
        <p className="eyebrow">FERRETERÍA EL10 · {isRegister ? 'NUEVO CLIENTE' : 'BIENVENIDO DE NUEVO'}</p>
        <h1>{isRegister ? 'Sumate al equipo' : 'Iniciá sesión'}<span>.</span></h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <label>Nombre<input name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} /></label>
          )}
          <label>Email<input name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} /></label>
          <label>Contraseña<input name="password" type="password" autoComplete={isRegister ? 'new-password' : 'current-password'} required value={form.password} onChange={handleChange} /></label>
          {isRegister && (
            <label>Repetir contraseña<input name="confirm" type="password" autoComplete="new-password" required value={form.confirm} onChange={handleChange} /></label>
          )}
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button className="button button-dark" type="submit">{isRegister ? 'Crear cuenta' : 'Ingresar'} <span>↗</span></button>
        </form>
        <p className="auth-switch">
          {isRegister ? '¿Ya tenés cuenta? ' : '¿Todavía no tenés cuenta? '}
          <Link to={isRegister ? '/ingresar' : '/registro'}>{isRegister ? 'Ingresá' : 'Registrate'}</Link>
        </p>
        <p className="auth-note">Tienda de demostración: los datos se guardan solo en este navegador.</p>
      </div>
    </section>
  )
}
