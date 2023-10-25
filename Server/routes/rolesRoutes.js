import { Router } from "express";

import { obtenerRoles } from "../controller/rolesController.js";

const router=Router();

router.get('/roles',obtenerRoles);


export default router;