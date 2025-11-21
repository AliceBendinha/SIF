import prisma from "../../config/prisma.js";

export default class UserModel {
  static create(data) {
    return prisma.user.create({ data });
  }

  static findByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
  }

  static findAll() {
    return prisma.user.findMany();
  }
}
