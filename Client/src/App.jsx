import { BrowserRouter, Router, Route } from 'react-router-dom'
import { EmpleadoProvider } from './context/empleadoContext'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <EmpleadoProvider>
          <Router>
            <Route />
          </Router>
        </EmpleadoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
