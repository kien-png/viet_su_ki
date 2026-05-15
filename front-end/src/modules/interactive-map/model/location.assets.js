import bachDangFeaturedImage from '../../../assets/images/wikimedia/bach_dang_featured.jpg';
import bachDangGalleryImage from '../../../assets/images/wikimedia/bach_dang_gallery_1.jpg';
import bachDangMapImage from '../../../assets/images/wikimedia/bach_dang_map.jpg';
import dienBienFeaturedImage from '../../../assets/images/wikimedia/dien_bien_featured.jpg';
import dienBienGalleryImage from '../../../assets/images/wikimedia/dien_bien_gallery_1.jpg';
import dienBienMapImage from '../../../assets/images/wikimedia/dien_bien_map.jpg';
import hueFeaturedImage from '../../../assets/images/wikimedia/hue_featured.jpg';
import hueGalleryImage from '../../../assets/images/wikimedia/hue_gallery_1.jpg';
import hueMapImage from '../../../assets/images/wikimedia/hue_map.jpg';
import coLoaImage from '../../../assets/images/wikimedia/thanh_co_loa.jpeg';
import lamKinhImage from '../../../assets/images/wikimedia/timeline_nha_le.jpg';
import dinhDocLapImage from '../../../assets/images/wikimedia/timeline_khang_chien_chong_my.jpg';

const locationAssets = {
  'bach-dang': {
    featuredImage: bachDangFeaturedImage,
    mapImage: bachDangMapImage,
    gallery: [bachDangGalleryImage, bachDangFeaturedImage, bachDangMapImage],
    type: 'archaeological'
  },
  'dien-bien-phu': {
    featuredImage: dienBienFeaturedImage,
    mapImage: dienBienMapImage,
    gallery: [dienBienGalleryImage, dienBienFeaturedImage, dienBienMapImage],
    type: 'archaeological'
  },
  'co-loa': {
    featuredImage: coLoaImage,
    mapImage: coLoaImage,
    gallery: [coLoaImage, bachDangMapImage, hueMapImage],
    type: 'capital'
  },
  'dinh-doc-lap': {
    featuredImage: dinhDocLapImage,
    mapImage: dinhDocLapImage,
    gallery: [dinhDocLapImage, dienBienFeaturedImage, hueFeaturedImage],
    type: 'capital'
  },
  'hoa-lu': {
    featuredImage: hueGalleryImage,
    mapImage: hueMapImage,
    gallery: [hueGalleryImage, hueFeaturedImage, hueMapImage],
    type: 'capital'
  },
  hue: {
    featuredImage: hueFeaturedImage,
    mapImage: hueMapImage,
    gallery: [hueGalleryImage, hueFeaturedImage, hueMapImage],
    type: 'capital'
  },
  'lam-kinh': {
    featuredImage: lamKinhImage,
    mapImage: lamKinhImage,
    gallery: [lamKinhImage, bachDangFeaturedImage, hueMapImage],
    type: 'archaeological'
  },
  'tan-trao': {
    featuredImage: dienBienGalleryImage,
    mapImage: dienBienMapImage,
    gallery: [dienBienGalleryImage, dienBienFeaturedImage, dienBienMapImage],
    type: 'archaeological'
  }
};

export function getLocationAssets(slug) {
  return locationAssets[slug] || locationAssets.hue;
}
