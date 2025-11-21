import { Router } from "express";
import PharmacyController from "./pharmacy.controller.js";

const router = Router();

router.post("/", PharmacyController.create);
router.get("/", PharmacyController.list);
router.get("/:id", PharmacyController.getById);
router.put("/:id", PharmacyController.update);
router.delete("/:id", PharmacyController.remove);

export default router;
