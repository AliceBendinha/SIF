import prisma from "../../config/prisma.js";

export default {
  create: (data) => prisma.stock.create({ data }),
  findAll: ({ skip = 0, take = 100 } = {}) =>
    prisma.stock.findMany({
      skip,
      take,
      include: { product: true, pharmacy: true },
    }),
  findById: (id) =>
    prisma.stock.findUnique({
      where: { id: Number(id) },
      include: { product: true, pharmacy: true },
    }),
  findByPharmacyProduct: (pharmacyId, productId) =>
    prisma.stock.findUnique({
      where: {
        pharmacyId_productId: {
          pharmacyId: Number(pharmacyId),
          productId: Number(productId),
        },
      },
    }),
  findByPharmacy: (pharmacyId) =>
    prisma.stock.findMany({
      where: { pharmacyId: Number(pharmacyId) },
      include: { product: true },
    }),
  update: (id, data) =>
    prisma.stock.update({ where: { id: Number(id) }, data }),
  remove: (id) => prisma.stock.delete({ where: { id: Number(id) } }),
};
