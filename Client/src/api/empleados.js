import axios from './axios';

export const obtenerEmpleadoss = () => axios.get('/empleados');
export const crearEmpleado = (empleado) => axios.post('/empleados',empleado);
export const actualizarEmpleado = (id, formData) => axios.put(`/empleados/${id}`,formData);
export const deleteEmpleado = (id) => axios.delete(`/empleados/${id}`);