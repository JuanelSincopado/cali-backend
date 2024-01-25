import { Router } from "express";
import { getAllTramite } from "../controller/tramite.controller.js";

const router = Router();

router.get("/", getAllTramite);

export default router;