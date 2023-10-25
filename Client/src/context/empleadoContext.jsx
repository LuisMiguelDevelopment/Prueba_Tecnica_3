import {createContext , useContext , useState} from 'react';

import {obtenerEmpleados , crearEmpleado , actualizarEmpleado , deleteEmpleado} from '../api/empleados';


const EmpleadoContext = createContext();

export const useEmpleados = () =>{
    const context = useContext(EmpleadoContext);
    if(!context){
        throw new Error('useEmpleados must be used within a ProductoProvider');
    }
    return context;
};


export function EmpleadoProvider({children}){
    
}

