import UserModel from "../users/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ApiError from "../../core/errors/ApiError.js";

export default class AuthService {
  static async login(email, password) {
    const user = await UserModel.findByEmail(email);
    if (!user) throw ApiError.unauthorized("Credenciais inválidas");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw ApiError.unauthorized("Senha incorreta");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { user, token };
  }
}
