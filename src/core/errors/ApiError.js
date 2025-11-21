export default class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static unauthorized(msg = "Não autorizado") {
    return new ApiError(401, msg);
  }

  static notFound(msg) {
    return new ApiError(404, msg);
  }

  static internal(msg = "Erro interno no servidor") {
    return new ApiError(500, msg);
  }
}
