import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import About from './pages/about'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './pages/productList'
import Contact from './pages/contact'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/product',
    element: <ProductList />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
