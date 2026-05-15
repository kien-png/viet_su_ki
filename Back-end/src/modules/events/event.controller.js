const eventService = require("./event.service");
const { successResponse, paginatedResponse, errorResponse } = require("../../utils/response");

const getEvents = async (req, res, next) => {
  try {
    const result = await eventService.getEvents(req.query);
    return paginatedResponse(res, "Lấy danh sách thành công", result.data, result.pagination);
  } catch (error) {
    return next(error);
  }
};

const getEventBySlug = async (req, res, next) => {
  try {
    const event = await eventService.getEventBySlug(req.params.slug);

    if (!event) {
      return errorResponse(res, "Không tìm thấy dữ liệu", 404);
    }

    return successResponse(res, "Lấy dữ liệu thành công", event);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getEvents,
  getEventBySlug,
};
