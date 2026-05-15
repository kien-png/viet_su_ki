const { Prisma } = require("@prisma/client");
const { errorResponse } = require("../utils/response");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return errorResponse(res, "Lỗi truy vấn dữ liệu", 400);
  }

  if (err.statusCode) {
    return errorResponse(res, err.message, err.statusCode);
  }

  return errorResponse(res, "Lỗi server", 500);
};

module.exports = errorMiddleware;
