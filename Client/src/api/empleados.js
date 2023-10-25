import axios from './axios';

export const obtenerEmpleados = () => axios.get('/empleados');
export const crearEmpleado = () => axios.post('/empleados');
export const actualizarEmpleado = () => axios.put('/empleados');
export const deleteEmpleado = () => axios.delete('/empleados');