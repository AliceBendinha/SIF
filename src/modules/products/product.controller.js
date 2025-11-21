import ProductService from "./product.service.js";
import { success, created } from "../../utils/response.js";

export default class ProductController {
  static async create(req, res, next) {
    try {
      const item = await ProductService.create(req.body);
      return created(res, item, "Produto criado");
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const items = await ProductService.list(req.query);
      return success(res, items, "Lista de produtos");
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const item = await ProductService.getById(req.params.id);
      return success(res, item);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const item = await ProductService.update(req.params.id, req.body);
      return success(res, item, "Produto atualizado");
    } catch (err) {
      next(err);
    }
  }

  static async remove(req, res, next) {
    try {
      await ProductService.remove(req.params.id);
      return res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
