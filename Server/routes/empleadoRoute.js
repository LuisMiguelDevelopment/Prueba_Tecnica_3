import {Router} from 'express';

import  { agregarEmpleado} from '../controller/empeladoController.js'

const router = Router();

router.post('/empleados',agregarEmpleado);

export default router;