import { Router } from "express";
import UserController from "./user.controller.js";
import validate from "../../middlewares/validate.js";
import { createUserDto } from "./dto/user.dto.js";

const router = Router();

router.post("/", validate(createUserDto), UserController.create);
router.get("/", UserController.getAll);

export default router;
