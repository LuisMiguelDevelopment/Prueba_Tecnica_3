import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmpleadoProvider } from './context/empleadoContext'
import  Empleados  from './pages/Empleados';
import './App.css'

function App() {


  return (
    <>
      <EmpleadoProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Empleados/>} />
          </Routes>
        </BrowserRouter>
      </EmpleadoProvider>
    </>
  )
}

export default App
