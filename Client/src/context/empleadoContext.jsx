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

    return (
        <EmpleadoContext.Provider value={{
            empleados, 
            obtenerEmpleados, 
        }}>
            {children}
        </EmpleadoContext.Provider>
    );
}
