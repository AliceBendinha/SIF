import prisma from "../../config/prisma.js";

export default {
  create: (data) => prisma.pharmacy.create({ data }),
  findAll: ({ skip = 0, take = 100 } = {}) =>
    prisma.pharmacy.findMany({ skip, take }),
  findById: (id) => prisma.pharmacy.findUnique({ where: { id: Number(id) } }),
  update: (id, data) =>
    prisma.pharmacy.update({ where: { id: Number(id) }, data }),
  remove: (id) => prisma.pharmacy.delete({ where: { id: Number(id) } }),
};
