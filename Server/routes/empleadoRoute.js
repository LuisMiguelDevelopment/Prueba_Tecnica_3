import {Router} from 'express';

import  { agregarEmpleado , obtenerEmpleados , eliminarEmpleado ,actualizarEmpleado} from '../controller/empeladoController.js'
import { validateSchema} from '../middleware/validator.middleware.js'
import {crearEmpleado} from '../schemas/empleado.schema.js'

const router = Router();

router.get('/empleados',obtenerEmpleados);
router.get('/empleados/:id',obtenerEmpleados);
router.post('/empleados',validateSchema(crearEmpleado) ,agregarEmpleado);
router.put('/empleados/:id',actualizarEmpleado);
router.delete('/empleados/:id',eliminarEmpleado);

export default router;