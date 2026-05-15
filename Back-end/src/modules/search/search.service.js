const prisma = require("../../config/prisma");
const { removeVietnameseTones } = require("../../utils/query");

const mapLocation = (item) => ({
  id: item.id,
  title: item.name,
  type: "location",
  summary: item.summary,
  slug: item.slug,
});

const mapPeriod = (item) => ({
  id: item.id,
  title: item.name,
  type: "period",
  summary: item.summary,
  slug: item.slug,
});

const mapEvent = (item) => ({
  id: item.id,
  title: item.title,
  type: "event",
  summary: item.summary,
  slug: item.slug,
});

const mapCharacter = (item) => ({
  id: item.id,
  title: item.name,
  type: "character",
  summary: item.summary,
  slug: item.slug,
});

const buildWhere = (keyword, titleField) => ({
  OR: [
    { [titleField]: { contains: keyword } },
    { slug: { contains: keyword } },
    { summary: { contains: keyword } },
    { description: { contains: keyword } },
    { searchText: { contains: keyword } },
  ],
});

const search = async (query) => {
  const keyword = removeVietnameseTones(query.q);
  const type = query.type;

  if (!keyword) {
    return [];
  }

  const tasks = [];

  if (!type || type === "location") {
    tasks.push(
      prisma.historicalLocation
        .findMany({
          where: buildWhere(keyword, "name"),
          take: 10,
          orderBy: { name: "asc" },
        })
        .then((items) => items.map(mapLocation))
    );
  }

  if (!type || type === "period") {
    tasks.push(
      prisma.historicalPeriod
        .findMany({
          where: buildWhere(keyword, "name"),
          take: 10,
          orderBy: [{ startYear: "asc" }, { id: "asc" }],
        })
        .then((items) => items.map(mapPeriod))
    );
  }

  if (!type || type === "event") {
    tasks.push(
      prisma.historicalEvent
        .findMany({
          where: buildWhere(keyword, "title"),
          take: 10,
          orderBy: [{ startYear: "asc" }, { id: "asc" }],
        })
        .then((items) => items.map(mapEvent))
    );
  }

  if (!type || type === "character") {
    tasks.push(
      prisma.historicalCharacter
        .findMany({
          where: buildWhere(keyword, "name"),
          take: 10,
          orderBy: { name: "asc" },
        })
        .then((items) => items.map(mapCharacter))
    );
  }

  const resultGroups = await Promise.all(tasks);

  return resultGroups.flat();
};

module.exports = {
  search,
};
