import { Router } from "express";

import { obtenerAreas } from "../controller/AreasController.js";

const router=Router();

router.get('/areas',obtenerAreas);


export default router;