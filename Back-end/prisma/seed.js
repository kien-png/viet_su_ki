require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { removeVietnameseTones } = require("../src/utils/query");

const prisma = new PrismaClient();

const makeSearchText = (...values) => removeVietnameseTones(values.filter(Boolean).join(" "));

const main = async () => {
  const periods = {};

  const periodData = [
    {
      name: "Văn Lang",
      slug: "van-lang",
      summary: "Nhà nước đầu tiên trong lịch sử Việt Nam.",
      description: "Văn Lang gắn với thời đại Hùng Vương và buổi đầu dựng nước.",
      startYear: -2879,
      endYear: -258,
    },
    {
      name: "Âu Lạc",
      slug: "au-lac",
      summary: "Nhà nước của An Dương Vương với kinh đô Cổ Loa.",
      description: "Âu Lạc kế tiếp Văn Lang và gắn với thành Cổ Loa.",
      startYear: -257,
      endYear: -179,
    },
    {
      name: "Nhà Trần",
      slug: "nha-tran",
      summary: "Triều đại ba lần kháng chiến chống quân Nguyên Mông.",
      description: "Nhà Trần là một triều đại lớn trong lịch sử Đại Việt.",
      startYear: 1225,
      endYear: 1400,
    },
    {
      name: "Nhà Lê",
      slug: "nha-le",
      summary: "Triều đại gắn với khởi nghĩa Lam Sơn và thời kỳ phát triển của Đại Việt.",
      description: "Nhà Lê có vai trò quan trọng trong lịch sử chính trị và văn hóa Việt Nam.",
      startYear: 1428,
      endYear: 1789,
    },
    {
      name: "Nhà Nguyễn",
      slug: "nha-nguyen",
      summary: "Triều đại phong kiến cuối cùng của Việt Nam.",
      description: "Nhà Nguyễn chọn Huế làm kinh đô từ năm 1802.",
      startYear: 1802,
      endYear: 1945,
    },
    {
      name: "Kháng chiến chống Pháp",
      slug: "khang-chien-chong-phap",
      summary: "Cuộc kháng chiến giành độc lập chống thực dân Pháp.",
      description: "Giai đoạn kháng chiến kết thúc bằng chiến thắng Điện Biên Phủ năm 1954.",
      startYear: 1945,
      endYear: 1954,
    },
    {
      name: "Kháng chiến chống Mỹ",
      slug: "khang-chien-chong-my",
      summary: "Cuộc kháng chiến thống nhất đất nước.",
      description: "Giai đoạn lịch sử quan trọng trong thế kỷ 20 của Việt Nam.",
      startYear: 1954,
      endYear: 1975,
    },
  ];

  for (const period of periodData) {
    periods[period.slug] = await prisma.historicalPeriod.upsert({
      where: { slug: period.slug },
      update: {
        ...period,
        searchText: makeSearchText(period.name, period.summary, period.description, period.slug),
      },
      create: {
        ...period,
        searchText: makeSearchText(period.name, period.summary, period.description, period.slug),
      },
    });
  }

  const locations = {};

  const locationData = [
    {
      name: "Huế",
      slug: "hue",
      summary: "Kinh đô của triều Nguyễn từ năm 1802.",
      description: "Huế là trung tâm chính trị, văn hóa quan trọng dưới thời nhà Nguyễn.",
      latitude: 16.4637,
      longitude: 107.5909,
      
    },
    {
      name: "Điện Biên Phủ",
      slug: "dien-bien-phu",
      summary: "Địa danh gắn với chiến thắng Điện Biên Phủ năm 1954.",
      description: "Điện Biên Phủ là nơi diễn ra trận quyết chiến chiến lược trong kháng chiến chống Pháp.",
      latitude: 21.386,
      longitude: 103.023,
      
    },
    {
      name: "Bạch Đằng",
      slug: "bach-dang",
      summary: "Dòng sông gắn với nhiều chiến thắng chống ngoại xâm.",
      description: "Bạch Đằng nổi tiếng với chiến thắng năm 1288 dưới sự chỉ huy của Trần Hưng Đạo.",
      latitude: 20.938,
      longitude: 106.783,
      
    },
    {
      name: "Cổ Loa",
      slug: "co-loa",
      summary: "Kinh đô của nhà nước Âu Lạc dưới thời An Dương Vương.",
      description: "Cổ Loa là trung tâm chính trị, quân sự quan trọng với hệ thống thành lũy xoắn ốc tiêu biểu của buổi đầu dựng nước.",
      latitude: 21.1179,
      longitude: 105.8714,
      
    },
    {
      name: "Hoa Lư",
      slug: "hoa-lu",
      summary: "Kinh đô đầu tiên của nhà nước phong kiến trung ương tập quyền.",
      description: "Hoa Lư gắn với Đinh Tiên Hoàng, Lê Hoàn và giai đoạn củng cố nền độc lập sau thời Bắc thuộc.",
      latitude: 20.2539,
      longitude: 105.907,
      
    },
    {
      name: "Lam Kinh",
      slug: "lam-kinh",
      summary: "Vùng đất gắn với khởi nghĩa Lam Sơn và triều Hậu Lê.",
      description: "Lam Kinh là căn cứ, miếu điện và không gian ký ức của Lê Lợi cùng triều đại Hậu Lê.",
      latitude: 19.9236,
      longitude: 105.4054,
     
    },
    {
      name: "Tân Trào",
      slug: "tan-trao",
      summary: "Căn cứ cách mạng quan trọng trước Tổng khởi nghĩa Tháng Tám.",
      description: "Tân Trào là nơi diễn ra Quốc dân đại hội và nhiều quyết sách quan trọng cho Cách mạng Tháng Tám năm 1945.",
      latitude: 21.8167,
      longitude: 105.4833,
      
    },
    {
      name: "Dinh Độc Lập",
      slug: "dinh-doc-lap",
      summary: "Biểu tượng của thời khắc thống nhất đất nước năm 1975.",
      description: "Dinh Độc Lập gắn với sự kiện 30/4/1975, đánh dấu kết thúc chiến tranh và mở ra thời kỳ thống nhất.",
      latitude: 10.7771,
      longitude: 106.6958,
      
    },
  ];

  for (const location of locationData) {
    locations[location.slug] = await prisma.historicalLocation.upsert({
      where: { slug: location.slug },
      update: {
        ...location,
        searchTags: makeSearchText(location.name, location.summary, location.description, location.slug),
      },
      create: {
        ...location,
        searchTags: makeSearchText(location.name, location.summary, location.description, location.slug),
      },
    });
  }

  const events = {};

  const eventData = [
    {
      title: "Gia Long chọn Huế làm kinh đô",
      slug: "gia-long-chon-hue-lam-kinh-do-1802",
      summary: "Năm 1802, Gia Long chọn Huế làm kinh đô của nhà Nguyễn.",
      description: "Việc chọn Huế làm kinh đô đánh dấu sự hình thành trung tâm quyền lực của triều Nguyễn.",
      startYear: 1802,
      periodId: periods["nha-nguyen"].id,
      locationId: locations.hue.id,
    },
    {
      title: "Thất thủ kinh đô Huế",
      slug: "that-thu-kinh-do-hue-1885",
      summary: "Sự kiện kinh đô Huế thất thủ năm 1885.",
      description: "Sự kiện này gắn với biến động lớn của triều Nguyễn trước sức ép của thực dân Pháp.",
      startYear: 1885,
      periodId: periods["nha-nguyen"].id,
      locationId: locations.hue.id,
    },
    {
      title: "Trận Bạch Đằng",
      slug: "tran-bach-dang-1288",
      summary: "Quân dân Đại Việt đánh bại quân Nguyên Mông năm 1288.",
      description: "Trận Bạch Đằng là chiến thắng tiêu biểu dưới sự chỉ huy của Trần Hưng Đạo.",
      startYear: 1288,
      periodId: periods["nha-tran"].id,
      locationId: locations["bach-dang"].id,
    },
    {
      title: "Chiến thắng Điện Biên Phủ",
      slug: "chien-thang-dien-bien-phu-1954",
      summary: "Chiến thắng quyết định trong kháng chiến chống Pháp năm 1954.",
      description: "Chiến thắng Điện Biên Phủ góp phần kết thúc chiến tranh Đông Dương.",
      startYear: 1954,
      periodId: periods["khang-chien-chong-phap"].id,
      locationId: locations["dien-bien-phu"].id,
    },
    {
      title: "An Dương Vương xây thành Cổ Loa",
      slug: "an-duong-vuong-xay-thanh-co-loa",
      summary: "Cổ Loa trở thành trung tâm quyền lực và phòng thủ của Âu Lạc.",
      description: "Thành Cổ Loa thể hiện trình độ tổ chức xã hội, quân sự và kỹ thuật xây dựng của cư dân Việt cổ.",
      startYear: -257,
      periodId: periods["au-lac"].id,
      locationId: locations["co-loa"].id,
    },
    {
      title: "Đinh Tiên Hoàng đóng đô ở Hoa Lư",
      slug: "dinh-tien-hoang-dong-do-o-hoa-lu-968",
      summary: "Hoa Lư trở thành kinh đô sau khi Đinh Bộ Lĩnh dẹp loạn 12 sứ quân.",
      description: "Sự kiện này đánh dấu bước phát triển của nhà nước phong kiến độc lập.",
      startYear: 968,
      periodId: periods["nha-le"].id,
      locationId: locations["hoa-lu"].id,
    },
    {
      title: "Khởi nghĩa Lam Sơn",
      slug: "khoi-nghia-lam-son-1418",
      summary: "Lê Lợi dựng cờ khởi nghĩa tại Lam Sơn năm 1418.",
      description: "Lam Kinh gắn với cuộc khởi nghĩa giành lại nền độc lập và sự ra đời của triều Hậu Lê.",
      startYear: 1418,
      endYear: 1427,
      periodId: periods["nha-le"].id,
      locationId: locations["lam-kinh"].id,
    },
    {
      title: "Quốc dân đại hội Tân Trào",
      slug: "quoc-dan-dai-hoi-tan-trao-1945",
      summary: "Tân Trào là trung tâm quyết sách trước Tổng khởi nghĩa Tháng Tám.",
      description: "Những quyết định tại Tân Trào góp phần chuẩn bị cho sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
      startYear: 1945,
      periodId: periods["khang-chien-chong-phap"].id,
      locationId: locations["tan-trao"].id,
    },
    {
      title: "Giải phóng Sài Gòn",
      slug: "giai-phong-sai-gon-1975",
      summary: "Sự kiện 30/4/1975 tại Dinh Độc Lập kết thúc chiến tranh.",
      description: "Thời khắc xe tăng tiến vào Dinh Độc Lập trở thành biểu tượng của thống nhất đất nước.",
      startYear: 1975,
      periodId: periods["khang-chien-chong-my"].id,
      locationId: locations["dinh-doc-lap"].id,
    },
  ];

  for (const event of eventData) {
    events[event.slug] = await prisma.historicalEvent.upsert({
      where: { slug: event.slug },
      update: {
        ...event,
        searchText: makeSearchText(event.title, event.summary, event.description, event.slug),
      },
      create: {
        ...event,
        searchText: makeSearchText(event.title, event.summary, event.description, event.slug),
      },
    });
  }

  const characters = {};

  const characterData = [
    {
      name: "Trần Hưng Đạo",
      slug: "tran-hung-dao",
      summary: "Danh tướng nhà Trần, người chỉ huy chiến thắng Bạch Đằng năm 1288.",
      description: "Trần Hưng Đạo là anh hùng dân tộc và nhà quân sự kiệt xuất của Đại Việt.",
      birthYear: 1228,
      deathYear: 1300,
      periodId: periods["nha-tran"].id,
    },
    {
      name: "Võ Nguyên Giáp",
      slug: "vo-nguyen-giap",
      summary: "Đại tướng chỉ huy chiến dịch Điện Biên Phủ.",
      description: "Võ Nguyên Giáp là vị tướng nổi tiếng trong lịch sử hiện đại Việt Nam.",
      birthYear: 1911,
      deathYear: 2013,
      periodId: periods["khang-chien-chong-phap"].id,
    },
    {
      name: "Hồ Chí Minh",
      slug: "ho-chi-minh",
      summary: "Lãnh tụ cách mạng Việt Nam.",
      description: "Hồ Chí Minh là nhân vật quan trọng trong lịch sử Việt Nam thế kỷ 20.",
      birthYear: 1890,
      deathYear: 1969,
      periodId: periods["khang-chien-chong-phap"].id,
    },
  ];

  for (const character of characterData) {
    characters[character.slug] = await prisma.historicalCharacter.upsert({
      where: { slug: character.slug },
      update: {
        ...character,
        searchText: makeSearchText(character.name, character.summary, character.description, character.slug),
      },
      create: {
        ...character,
        searchText: makeSearchText(character.name, character.summary, character.description, character.slug),
      },
    });
  }

  await prisma.characterEvent.upsert({
    where: {
      characterId_eventId: {
        characterId: characters["tran-hung-dao"].id,
        eventId: events["tran-bach-dang-1288"].id,
      },
    },
    update: { role: "Chỉ huy" },
    create: {
      characterId: characters["tran-hung-dao"].id,
      eventId: events["tran-bach-dang-1288"].id,
      role: "Chỉ huy",
    },
  });

  await prisma.characterEvent.upsert({
    where: {
      characterId_eventId: {
        characterId: characters["vo-nguyen-giap"].id,
        eventId: events["chien-thang-dien-bien-phu-1954"].id,
      },
    },
    update: { role: "Chỉ huy chiến dịch" },
    create: {
      characterId: characters["vo-nguyen-giap"].id,
      eventId: events["chien-thang-dien-bien-phu-1954"].id,
      role: "Chỉ huy chiến dịch",
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
