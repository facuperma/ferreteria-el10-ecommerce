import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/ingresar" element={<AuthPage key="ingresar" mode="ingresar" />} />
        <Route path="/registro" element={<AuthPage key="registro" mode="registro" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
