import { Router } from "express";
import { contect } from "../controllers/contect.controllers.js";

const router = Router();

router.route("/contect").post(contect);
router.post('/contect', (req, res) => {
    res.json({ message: 'Welcome to the contect Page!' });
});

export default router;
