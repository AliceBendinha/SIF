import prisma from "../../config/prisma.js";

export default {
  create: (data) => prisma.product.create({ data }),
  findAll: ({ skip = 0, take = 100 } = {}) =>
    prisma.product.findMany({ skip, take }),
  findById: (id) => prisma.product.findUnique({ where: { id: Number(id) } }),
  update: (id, data) =>
    prisma.product.update({ where: { id: Number(id) }, data }),
  remove: (id) => prisma.product.delete({ where: { id: Number(id) } }),
};
