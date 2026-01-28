import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Erro ao carregar a página</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
