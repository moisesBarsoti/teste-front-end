import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.scss'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodasCategorias from './pages/TodasCategorias/index.tsx'
import OfertasDoDia from './pages/OfertasDoDia/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Erro ao carregar a página</div>,
    children: [
      {path: "/", element: <OfertasDoDia />},
      {path: "/todasCategorias", element: <TodasCategorias />},
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
