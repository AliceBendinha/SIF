import StockService from "./stock.service.js";
import { success, created } from "../../utils/response.js";

export default class StockController {
  static async create(req, res, next) {
    try {
      const { pharmacyId, productId } = req.params;
      const item = await StockService.create(pharmacyId, productId, req.body);
      return created(res, item, "Estoque criado");
    } catch (err) {
      next(err);
    }
  }

  static async upsert(req, res, next) {
    try {
      const { pharmacyId, productId } = req.params;
      const item = await StockService.upsert(pharmacyId, productId, req.body);
      return success(res, item, "Estoque atualizado");
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const items = await StockService.list(req.query);
      return success(res, items, "Lista do estoque");
    } catch (err) {
      next(err);
    }
  }

  static async listByPharmacy(req, res, next) {
    try {
      const items = await StockService.listByPharmacy(req.params.pharmacyId);
      return success(res, items, "Produtos por farmácia");
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const item = await StockService.getById(req.params.id);
      return success(res, item);
    } catch (err) {
      next(err);
    }
  }

  static async remove(req, res, next) {
    try {
      await StockService.remove(req.params.id);
      return res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
