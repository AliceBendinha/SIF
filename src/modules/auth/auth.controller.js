import AuthService from "./auth.service.js";
import { success } from "../../utils/response.js";

export default class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const data = await AuthService.login(email, password);
      return success(res, data, "Login efetuado");
    } catch (err) {
      next(err);
    }
  }
}
