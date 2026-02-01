import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
