import dienBienImage from '../../../assets/images/wikimedia/dien_bien_featured.jpg';
import hueImage from '../../../assets/images/wikimedia/hue_featured.jpg';
import tranHungDaoImage from '../../../assets/images/wikimedia/home_feature_character_tran_hung_dao.jpg';

const periodImages = {
  'au-lac': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Thanh_co_loa2.jpg',
  'khang-chien-chong-my':
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/Independence_Palace_or_Reunification_Palace_%2812110613104%29.jpg',
  'khang-chien-chong-phap': dienBienImage,
  'nha-le': 'https://upload.wikimedia.org/wikipedia/commons/5/57/Lam_Kinh.jpg',
  'nha-nguyen': hueImage,
  'nha-tran': tranHungDaoImage,
  'van-lang':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Trong_dong_Dong_Son_Guimet.jpg/500px-Trong_dong_Dong_Son_Guimet.jpg?utm_source=vi.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
};

const periodThemes = {
  'au-lac': 'Nha nuoc hop nhat',
  'khang-chien-chong-my': 'Thong nhat non song',
  'khang-chien-chong-phap': 'Khang chien giai phong',
  'nha-le': 'Ky cuong va phuc hung',
  'nha-nguyen': 'Trat tu cung dinh',
  'nha-tran': 'Hao khi Dong A',
  'van-lang': 'Nguon coi quoc gia'
};

export function getPeriodImage(slug) {
  return periodImages[slug] || periodImages['van-lang'];
}

export function getPeriodTheme(slug) {
  return periodThemes[slug] || 'Thoi ky lich su';
}
