import * as post from "../controllers/post.js";
import express from "express";
const router = express.Router();
router.use(express.json());
router.post("/",post.postAll);
export default router;