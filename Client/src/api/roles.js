import axios from './axios'

export const obtenerRolesRequest = ()=> axios.get('/roles');