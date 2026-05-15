import hoChiMinhImage from '../../../assets/images/wikimedia/ho_chi_minh_card.jpg';
import tranHungDaoCardImage from '../../../assets/images/wikimedia/home_feature_character_tran_hung_dao.jpg';
import voNguyenGiapCardImage from '../../../assets/images/wikimedia/vo_nguyen_giap_card.jpg';

const tranHungDaoPortraitImage = 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tran_Hung_Dao_statue.jpg';
const voNguyenGiapPortraitImage = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Vo_Nguyen_Giap_2008.jpg';

export const historicalCharacters = [
  {
    id: 'tran-hung-dao',
    name: 'Trần Hưng Đạo',
    slug: 'tran-hung-dao',
    era: '1228 - 1300',
    title: 'Hưng Đạo Đại Vương',
    summary: 'Danh tướng thời Trần, linh hồn của những chiến thắng chống Nguyên Mông và biểu tượng của ý chí tự chủ.',
    portrait: tranHungDaoPortraitImage,
    cardImage: tranHungDaoCardImage,
    quote: 'Nếu bệ hạ muốn hàng, xin chém đầu thần trước đã.',
    timeline: [
      { year: '1228', title: 'Khởi đầu một huyền thoại', description: 'Sinh ra trong bối cảnh nhà Trần đang củng cố quyền lực.' },
      { year: '1285', title: 'Lời hịch vang vọng', description: 'Hịch tướng sĩ khơi dậy tinh thần giữ nước trong toàn quân.' },
      { year: '1288', title: 'Đại thắng Bạch Đằng', description: 'Đưa nghệ thuật thủy chiến lên đỉnh cao và bảo vệ nền độc lập.' },
      { year: '1300', title: 'Về với dân tộc', description: 'Di sản tinh thần và quân sự trở thành chuẩn mực nhiều thế hệ.' }
    ],
    legacy: ['Binh thư yếu lược', 'Vạn Kiếp tông bí truyền thư'],
    works: ['Hịch tướng sĩ', 'Tinh thần Đông A'],
    relatedLocationSlugs: ['bach-dang']
  },
  {
    id: 'ho-chi-minh',
    name: 'Hồ Chí Minh',
    slug: 'ho-chi-minh',
    era: '1890 - 1969',
    title: 'Lãnh tụ giải phóng dân tộc',
    summary: 'Người đặt nền tảng cho cách mạng Việt Nam hiện đại và khơi mở con đường độc lập dân tộc.',
    portrait: hoChiMinhImage,
    cardImage: hoChiMinhImage,
    quote: 'Không có gì quý hơn độc lập, tự do.',
    timeline: [
      { year: '1911', title: 'Ra đi tìm đường cứu nước', description: 'Bắt đầu hành trình dài để tìm lời giải cho độc lập dân tộc.' },
      { year: '1930', title: 'Thành lập Đảng', description: 'Định hình lực lượng lãnh đạo cách mạng Việt Nam.' },
      { year: '1945', title: 'Tuyên ngôn Độc lập', description: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.' },
      { year: '1969', title: 'Di sản trường tồn', description: 'Tư tưởng và tấm gương tiếp tục định hướng nhiều thế hệ.' }
    ],
    legacy: ['Tư tưởng Hồ Chí Minh', 'Đường Kách mệnh'],
    works: ['Nhật ký trong tù', 'Tuyên ngôn Độc lập'],
    relatedLocationSlugs: ['dien-bien-phu']
  },
  {
    id: 'vo-nguyen-giap',
    name: 'Võ Nguyên Giáp',
    slug: 'vo-nguyen-giap',
    era: '1911 - 2013',
    title: 'Đại tướng của nhân dân',
    summary: 'Nhà quân sự kiệt xuất, người chỉ huy những chiến dịch quyết định của thế kỷ XX Việt Nam.',
    portrait: voNguyenGiapPortraitImage,
    cardImage: voNguyenGiapCardImage,
    quote: 'Sức mạnh của chiến tranh nhân dân là vô tận khi lòng dân đã quyết.',
    timeline: [
      { year: '1944', title: 'Đội Việt Nam Tuyên truyền Giải phóng quân', description: 'Khởi nguồn của một quân đội cách mạng hiện đại.' },
      { year: '1954', title: 'Điện Biên Phủ', description: 'Đưa nghệ thuật chiến tranh nhân dân lên tầm lịch sử thế giới.' },
      { year: '1975', title: 'Thống nhất đất nước', description: 'Tiếp tục góp phần vào thắng lợi hoàn toàn của dân tộc.' },
      { year: '2013', title: 'Người anh cả của quân đội', description: 'Một biểu tượng của trí tuệ, tiết chế và bản lĩnh Việt Nam.' }
    ],
    legacy: ['Nghệ thuật quân sự Việt Nam hiện đại', 'Chiến tranh nhân dân'],
    works: ['Tổng hành dinh trong mùa xuân toàn thắng', 'Điện Biên Phủ'],
    relatedLocationSlugs: ['dien-bien-phu']
  }
];
