# FerreteríaEl10

Tienda online de ferretería hecha con React. Tiene catálogo con filtro por categoría, página de detalle de cada producto y un carrito que se guarda en el navegador, así no se pierde al recargar la página.

## Stack

- React 19 + Vite
- React Router DOM
- Context API para el estado del carrito
- localStorage para persistir el carrito
- ESLint
- Deploy configurado para Netlify y Vercel

## Funcionalidades

- Catálogo con productos cargados desde un JSON
- Filtro por categoría: herramientas, pinturería, electricidad y plomería
- Detalle de producto con precio, descripción y material
- Carrito: agregar, sumar o restar unidades, quitar productos y vaciarlo
- Subtotal y total calculados en tiempo real
- Estados de carga y error cuando falla la carga del catálogo
- Página 404 para rutas que no existen

## Rutas

| Ruta | Vista |
| --- | --- |
| `/` | Catálogo completo |
| `/categoria/:categoryId` | Catálogo filtrado por categoría |
| `/producto/:id` | Detalle de un producto |
| `/carrito` | Carrito de compras |

## Estructura

```
src/
  components/  Header, NavBar, CartWidget, Item, ItemListContainer, Layout, Footer
  pages/       ProductDetail, CartPage, NotFound
  context/     CartContext (provider) y CartStore (hook useCart)
  utils/       formatPrice
public/
  productos.json
```

El carrito vive en un Context para que cualquier componente pueda leerlo o modificarlo sin pasar props por toda la app. El ícono del header, por ejemplo, muestra la cantidad de productos sin depender de la página en la que estés.

## Cómo correrlo

```bash
git clone https://github.com/facuperma/ferreteria-el10-ecommerce.git
cd ferreteria-el10-ecommerce
npm install
npm run dev
```

Para generar el build de producción:

```bash
npm run build
```

## Próximos pasos

- Pasar el catálogo a una base de datos o a una API propia
- Checkout con formulario de compra
- Buscador de productos

---

Facundo Peralta Marello · [GitHub](https://github.com/facuperma)
