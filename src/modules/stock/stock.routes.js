import { Router } from "express";
import StockController from "./stock.controller.js";

const router = Router();

router.get("/", StockController.list);
router.get("/pharmacy/:pharmacyId", StockController.listByPharmacy);
router.get("/:id", StockController.getById);
router.post("/pharmacy/:pharmacyId/product/:productId", StockController.create);
router.put("/pharmacy/:pharmacyId/product/:productId", StockController.upsert);
router.delete("/:id", StockController.remove);

export default router;
