const locationService = require("./location.service");
const { successResponse, paginatedResponse, errorResponse } = require("../../utils/response");

const getLocations = async (req, res, next) => {
  try {
    const result = await locationService.getLocations(req.query);
    return paginatedResponse(res, "Lấy danh sách thành công", result.data, result.pagination);
  } catch (error) {
    return next(error);
  }
};

const getLocationBySlug = async (req, res, next) => {
  try {
    const location = await locationService.getLocationBySlug(req.params.slug);

    if (!location) {
      return errorResponse(res, "Không tìm thấy dữ liệu", 404);
    }

    return successResponse(res, "Lấy dữ liệu thành công", location);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getLocations,
  getLocationBySlug,
};
