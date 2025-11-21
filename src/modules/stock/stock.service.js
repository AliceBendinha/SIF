import model from "./stock.model.js";
import ApiError from "../../core/errors/ApiError.js";

export default class StockService {
  static async create(pharmacyId, productId, data) {
    const existing = await model
      .findByPharmacyProduct(pharmacyId, productId)
      .catch(() => null);
    if (existing)
      throw ApiError.badRequest("Item já existe no estoque desta farmácia");

    return model.create({
      pharmacyId: Number(pharmacyId),
      productId: Number(productId),
      price: Number(data.price),
      quantity: Number(data.quantity ?? 0),
    });
  }

  static async upsert(pharmacyId, productId, data) {
    const existing = await model
      .findByPharmacyProduct(pharmacyId, productId)
      .catch(() => null);
    if (existing) {
      return model.update(existing.id, {
        price: Number(data.price ?? existing.price),
        quantity: Number(data.quantity ?? existing.quantity),
      });
    }
    return this.create(pharmacyId, productId, data);
  }

  static async list(opts) {
    return model.findAll(opts);
  }

  static async listByPharmacy(pharmacyId) {
    // valida existência de farmácia
    const p = await (
      await import("../../config/prisma.js")
    ).default.pharmacy.findUnique({ where: { id: Number(pharmacyId) } });
    if (!p) throw ApiError.notFound("Farmácia não encontrada");
    return model.findByPharmacy(pharmacyId);
  }

  static async getById(id) {
    const item = await model.findById(id);
    if (!item) throw ApiError.notFound("Estoque não encontrado");
    return item;
  }

  static async remove(id) {
    await this.getById(id);
    return model.remove(id);
  }
}
