import { Outlet } from 'react-router-dom';
import './App.scss';

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
