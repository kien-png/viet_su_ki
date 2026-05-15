const prisma = require("../../config/prisma");
const { getPagination, buildPagination, removeVietnameseTones } = require("../../utils/query");

const getLocations = async (query) => {
  const { page, limit, skip } = getPagination(query);
  const search = removeVietnameseTones(query.search);
  const where = search
    ? {
        OR: [
          { name: { contains: search } },
          { slug: { contains: search } },
          { searchTags: { contains: search } },
        ],
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.historicalLocation.findMany({
      where,
      skip,
      take: limit,
      orderBy: { name: "asc" },
      include: {
        images: true,
        _count: {
          select: {
            events: true,
          },
        },
      },
    }),
    prisma.historicalLocation.count({ where }),
  ]);

  return {
    data,
    pagination: buildPagination(page, limit, total),
  };
};

const getLocationBySlug = async (slug) => {
  return prisma.historicalLocation.findUnique({
    where: { slug },
    include: {
      images: true,
      events: {
        orderBy: [{ startYear: "asc" }, { id: "asc" }],
        include: {
          period: true,
        },
      },
    },
  });
};

module.exports = {
  getLocations,
  getLocationBySlug,
};
