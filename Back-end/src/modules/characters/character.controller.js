const characterService = require("./character.service");
const { successResponse, paginatedResponse, errorResponse } = require("../../utils/response");

const getCharacters = async (req, res, next) => {
  try {
    const result = await characterService.getCharacters(req.query);
    return paginatedResponse(res, "Lấy danh sách thành công", result.data, result.pagination);
  } catch (error) {
    return next(error);
  }
};

const getCharacterBySlug = async (req, res, next) => {
  try {
    const character = await characterService.getCharacterBySlug(req.params.slug);

    if (!character) {
      return errorResponse(res, "Không tìm thấy dữ liệu", 404);
    }

    return successResponse(res, "Lấy dữ liệu thành công", character);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCharacters,
  getCharacterBySlug,
};
