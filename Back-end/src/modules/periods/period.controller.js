const periodService = require("./period.service");
const { successResponse, paginatedResponse, errorResponse } = require("../../utils/response");

const getPeriods = async (req, res, next) => {
  try {
    const result = await periodService.getPeriods(req.query);
    return paginatedResponse(res, "Lấy danh sách thành công", result.data, result.pagination);
  } catch (error) {
    return next(error);
  }
};

const getPeriodBySlug = async (req, res, next) => {
  try {
    const period = await periodService.getPeriodBySlug(req.params.slug);

    if (!period) {
      return errorResponse(res, "Không tìm thấy dữ liệu", 404);
    }

    return successResponse(res, "Lấy dữ liệu thành công", period);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPeriods,
  getPeriodBySlug,
};
