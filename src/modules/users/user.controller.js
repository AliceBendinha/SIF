import UserService from "./user.service.js";
import { success, created } from "../../utils/response.js";

export default class UserController {
  static async create(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      return created(res, user);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await UserService.getUsers();
      return success(res, users);
    } catch (err) {
      next(err);
    }
  }
}
