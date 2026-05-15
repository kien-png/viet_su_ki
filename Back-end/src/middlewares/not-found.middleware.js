const { errorResponse } = require("../utils/response");

const notFoundMiddleware = (req, res) => {
  return errorResponse(res, "Không tìm thấy đường dẫn", 404);
};

module.exports = notFoundMiddleware;
