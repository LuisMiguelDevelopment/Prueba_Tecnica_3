import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmpleadoProvider } from './context/empleadoContext'
import { RolesProvider } from './context/rolesContext'
import { AreasProvider } from './context/areasContext';
import Empleados from './pages/Empleados';
import './App.css'

function App() {


  return (
    <>
      <EmpleadoProvider>
        <RolesProvider>
          <AreasProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Empleados />} />
              </Routes>
            </BrowserRouter>
          </AreasProvider>
        </RolesProvider>
      </EmpleadoProvider>
    </>
  )
}

export default App
