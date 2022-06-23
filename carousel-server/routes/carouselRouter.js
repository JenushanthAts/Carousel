import express from "express";
import { fetchData } from "../controller/carouselController.js";
const router = express.Router();

router.get("/carousel", fetchData);
// module.exports = router

export default router;
