const prisma = require("../../config/prisma");
const { getPagination, buildPagination, removeVietnameseTones } = require("../../utils/query");

const characterInclude = {
  period: true,
  images: true,
  timelines: {
    orderBy: [{ year: "asc" }, { id: "asc" }],
  },
  events: {
    include: {
      event: true,
    },
  },
};

const getCharacters = async (query) => {
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
    prisma.historicalCharacter.findMany({
      where,
      skip,
      take: limit,
      orderBy: { name: "asc" },
      include: characterInclude,
    }),
    prisma.historicalCharacter.count({ where }),
  ]);

  return {
    data,
    pagination: buildPagination(page, limit, total),
  };
};

const getCharacterBySlug = async (slug) => {
  return prisma.historicalCharacter.findUnique({
    where: { slug },
    include: characterInclude,
  });
};

module.exports = {
  getCharacters,
  getCharacterBySlug,
};
