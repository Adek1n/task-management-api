import * as get from "../controllers/get.js";
import express from "express";
const router = express.Router();
router.get("/",get.getAll);
router.get("/:id",get.getID);
export default router;