import PharmacyService from "./pharmacy.service.js";
import { success, created } from "../../utils/response.js";

export default class PharmacyController {
  static async create(req, res, next) {
    try {
      const item = await PharmacyService.create(req.body);
      return created(res, item, "Farmácia criada");
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const items = await PharmacyService.list(req.query);
      return success(res, items, "Lista de farmácias");
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const item = await PharmacyService.getById(req.params.id);
      return success(res, item);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const item = await PharmacyService.update(req.params.id, req.body);
      return success(res, item, "Farmácia atualizada");
    } catch (err) {
      next(err);
    }
  }

  static async remove(req, res, next) {
    try {
      await PharmacyService.remove(req.params.id);
      return res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
