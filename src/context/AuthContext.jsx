import { useState } from 'react'
import { AuthContext } from './AuthStore'
const USERS_KEY = 'ferreteria-el10-users'
const SESSION_KEY = 'ferreteria-el10-session'

// Cuentas de demostración: se guardan en el navegador, sin servidor ni cifrado.
function readStored(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStored(SESSION_KEY, null))

  function startSession(account) {
    const sessionUser = { name: account.name, email: account.email }
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
    setUser(sessionUser)
  }

  function register({ name, email, password }) {
    const users = readStored(USERS_KEY, [])
    const cleanEmail = normalizeEmail(email)
    if (users.some((account) => account.email === cleanEmail)) {
      throw new Error('Ya existe una cuenta con ese email.')
    }
    const account = { name: name.trim(), email: cleanEmail, password }
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, account]))
    startSession(account)
  }

  function login({ email, password }) {
    const account = readStored(USERS_KEY, []).find(
      (entry) => entry.email === normalizeEmail(email) && entry.password === password,
    )
    if (!account) throw new Error('Email o contraseña incorrectos.')
    startSession(account)
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  const value = { user, register, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
