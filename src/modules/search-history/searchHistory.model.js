import prisma from "../../config/prisma.js";

export default {
  create: (data) => prisma.searchHistory.create({ data }),
  findByUser: (userId, { skip = 0, take = 50 } = {}) =>
    prisma.searchHistory.findMany({
      where: { userId: Number(userId) },
      orderBy: { createdAt: "desc" },
      skip,
      take,
    }),
};
