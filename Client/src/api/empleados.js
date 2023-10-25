import axios from './axios';

export const obtenerEmpleadoss = () => axios.get('/empleados');
export const crearEmpleado = (empleado) => axios.post('/empleados',empleado);
export const actualizarEmpleado = () => axios.put('/empleados');
export const deleteEmpleado = () => axios.delete('/empleados');