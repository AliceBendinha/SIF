import UserModel from "./user.model.js";
import ApiError from "../../core/errors/ApiError.js";
import bcrypt from "bcryptjs";

export default class UserService {
  static async createUser(data) {
    const exists = await UserModel.findByEmail(data.email);
    if (exists) throw ApiError.badRequest("E-mail já existe");

    const hashed = await bcrypt.hash(data.password, 10);

    return UserModel.create({
      ...data,
      password: hashed,
    });
  }

  static getUsers() {
    return UserModel.findAll();
  }
}
