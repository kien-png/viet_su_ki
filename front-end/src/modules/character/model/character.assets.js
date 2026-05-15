import hoChiMinhImage from '../../../assets/images/wikimedia/ho_chi_minh_card.jpg';
import tranHungDaoCardImage from '../../../assets/images/wikimedia/home_feature_character_tran_hung_dao.jpg';
import voNguyenGiapCardImage from '../../../assets/images/wikimedia/vo_nguyen_giap_card.jpg';

const characterAssets = {
  'ho-chi-minh': {
    cardImage: hoChiMinhImage,
    portrait: hoChiMinhImage
  },
  'tran-hung-dao': {
    cardImage: tranHungDaoCardImage,
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tran_Hung_Dao_statue.jpg'
  },
  'vo-nguyen-giap': {
    cardImage: voNguyenGiapCardImage,
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Vo_Nguyen_Giap_2008.jpg'
  }
};

export function getCharacterAssets(slug) {
  return characterAssets[slug] || characterAssets['ho-chi-minh'];
}
