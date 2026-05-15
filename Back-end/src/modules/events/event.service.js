const prisma = require("../../config/prisma");
const { getPagination, buildPagination, removeVietnameseTones } = require("../../utils/query");

const eventInclude = {
  period: true,
  location: true,
  images: true,
  characters: {
    include: {
      character: true,
    },
  },
};

const getEvents = async (query) => {
  const { page, limit, skip } = getPagination(query);
  const search = removeVietnameseTones(query.search);
  const where = search
    ? {
        OR: [
          { title: { contains: search } },
          { slug: { contains: search } },
          { searchText: { contains: search } },
        ],
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.historicalEvent.findMany({
      where,
      skip,
      take: limit,
      orderBy: [{ startYear: "asc" }, { id: "asc" }],
      include: eventInclude,
    }),
    prisma.historicalEvent.count({ where }),
  ]);

  return {
    data,
    pagination: buildPagination(page, limit, total),
  };
};

const getEventBySlug = async (slug) => {
  return prisma.historicalEvent.findUnique({
    where: { slug },
    include: eventInclude,
  });
};

module.exports = {
  getEvents,
  getEventBySlug,
};
