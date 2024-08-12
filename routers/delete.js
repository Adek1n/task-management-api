import * as del from "../controllers/delete.js";
import express from "express";
const router = express.Router();
router.delete("/:id",del.deleteID);
export default router;