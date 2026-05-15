const searchService = require("./search.service");
const { successResponse, errorResponse } = require("../../utils/response");

const search = async (req, res, next) => {
  try {
    if (!req.query.q) {
      return errorResponse(res, "Vui lòng nhập từ khóa tìm kiếm", 400);
    }

    const validTypes = ["location", "period", "event", "character"];

    if (req.query.type && !validTypes.includes(req.query.type)) {
      return errorResponse(res, "Loại tìm kiếm không hợp lệ", 400);
    }

    const data = await searchService.search(req.query);
    return successResponse(res, "Tìm kiếm thành công", data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  search,
};
