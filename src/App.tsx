import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app-layout">
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
