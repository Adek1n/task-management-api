import * as put from "../controllers/put.js";
import express from "express";
const router = express.Router();
router.put("/:id",put.putID);
export default router;