import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
