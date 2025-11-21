import SearchHistoryService from "./searchHistory.service.js";
import { success, created } from "../../utils/response.js";

export default class SearchHistoryController {
  static async listByUser(req, res, next) {
    try {
      const items = await SearchHistoryService.listByUser(
        req.params.userId,
        req.query
      );
      return success(res, items, "Histórico do usuário");
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const item = await SearchHistoryService.create(
        req.params.userId,
        req.body.term
      );
      return created(res, item, "Pesquisa registada");
    } catch (err) {
      next(err);
    }
  }
}
