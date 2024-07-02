import { Router } from "express";
import { contect } from "../controllers/contect.controllers.js";

const router = Router();

router.route("/contect").post(contect);

export default router;
