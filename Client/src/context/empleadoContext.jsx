import { createContext, useContext, useState } from 'react';

import { obtenerEmpleadoss, crearEmpleado, actualizarEmpleado, deleteEmpleado } from '../api/empleados';


const EmpleadoContext = createContext();

export const useEmpleados = () => {
    const context = useContext(EmpleadoContext);
    if (!context) {
        throw new Error('useEmpleados must be used within a ProductoProvider');
    }
    return context;
};

export function EmpleadoProvider({ children }) {
    const [empleados, setEmpleados] = useState([]);

    const obtenerEmpleados = async () => {
        try {
            const res = await obtenerEmpleadoss();
            setEmpleados(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
   
    const agregarEmpleado = async (nuevoEmpleado) => {
        try {
            const res = await crearEmpleado(nuevoEmpleado); // Debes pasar nuevoEmpleado aquí
            setEmpleados([...empleados, res.data]);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <EmpleadoContext.Provider value={{
            empleados, 
            obtenerEmpleados,
            agregarEmpleado 
        }}>
            {children}
        </EmpleadoContext.Provider>
    );
}
