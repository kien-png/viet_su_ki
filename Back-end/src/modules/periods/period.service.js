const prisma = require("../../config/prisma");
const { getPagination, buildPagination, removeVietnameseTones } = require("../../utils/query");

const periodInclude = {
  _count: {
    select: {
      events: true,
      characters: true,
    },
  },
};

const getPeriods = async (query) => {
  const { page, limit, skip } = getPagination(query);
  const search = removeVietnameseTones(query.search);
  const where = search
    ? {
        OR: [
          { name: { contains: search } },
          { slug: { contains: search } },
          { searchText: { contains: search } },
        ],
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.historicalPeriod.findMany({
      where,
      skip,
      take: limit,
      orderBy: [{ startYear: "asc" }, { id: "asc" }],
      include: periodInclude,
    }),
    prisma.historicalPeriod.count({ where }),
  ]);

  return {
    data,
    pagination: buildPagination(page, limit, total),
  };
};

const getPeriodBySlug = async (slug) => {
  return prisma.historicalPeriod.findUnique({
    where: { slug },
    include: {
      events: {
        orderBy: [{ startYear: "asc" }, { id: "asc" }],
      },
      characters: {
        orderBy: { name: "asc" },
      },
    },
  });
};

module.exports = {
  getPeriods,
  getPeriodBySlug,
};
