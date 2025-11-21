import model from "./searchHistory.model.js";
import ApiError from "../../core/errors/ApiError.js";
import prisma from "../../config/prisma.js";

export default class SearchHistoryService {
  static async listByUser(userId, opts) {
    const u = await prisma.user.findUnique({ where: { id: Number(userId) } });
    if (!u) throw ApiError.notFound("Usuário não encontrado");
    return model.findByUser(userId, opts);
  }

  static async create(userId, term) {
    const u = await prisma.user.findUnique({ where: { id: Number(userId) } });
    if (!u) throw ApiError.notFound("Usuário não encontrado");
    return model.create({ userId: Number(userId), term });
  }
}
