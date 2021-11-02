import express from "express";
import prod from "../controllers/producto.js";
const router = express.Router();

router.post("/registerProd", prod.registerProd);

export default router;

