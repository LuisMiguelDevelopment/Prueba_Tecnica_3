import {Router} from 'express';

import  { agregarEmpleado , obtenerEmpleados , eliminarEmpleado ,actualizarEmpleado} from '../controller/empeladoController.js'

const router = Router();

router.get('/empleados',obtenerEmpleados);
router.get('/empleados/:id',obtenerEmpleados);
router.post('/empleados',agregarEmpleado);
router.put('/empleados/:id',actualizarEmpleado);
router.delete('/empleados/:id',eliminarEmpleado);

export default router;