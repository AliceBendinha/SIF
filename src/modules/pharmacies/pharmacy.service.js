import model from "./pharmacy.model.js";
import ApiError from "../../core/errors/ApiError.js";

export default class PharmacyService {
  static async create(data) {
    return model.create(data);
  }

  static async list(opts) {
    return model.findAll(opts);
  }

  static async getById(id) {
    const p = await model.findById(id);
    if (!p) throw ApiError.notFound("Farmácia não encontrada");
    return p;
  }

  static async update(id, data) {
    await this.getById(id);
    return model.update(id, data);
  }

  static async remove(id) {
    await this.getById(id);
    return model.remove(id);
  }
}
