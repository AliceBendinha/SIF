import { Router } from "express";
import SearchHistoryController from "./searchHistory.controller.js";

const router = Router();

router.get("/user/:userId", SearchHistoryController.listByUser);
router.post("/user/:userId", SearchHistoryController.create);

export default router;
