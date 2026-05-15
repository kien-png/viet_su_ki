import { apiGet } from '../../../shared/api-client';
import { firstImage, formatYearRange } from '../../../shared/format';
import { getLocationAssets } from './location.assets';

function mapEventToMoment(event) {
  return {
    year: formatYearRange(event.startYear, event.endYear),
    title: event.title,
    description: event.summary || event.description || 'Đang cập nhật nội dung.'
  };
}

function mapLocation(location) {
  const assets = getLocationAssets(location.slug);
  const featuredImage = firstImage(location.images, assets.featuredImage);
  const galleryImages = location.images?.length
    ? location.images.map((image) => image.imageUrl)
    : assets.gallery;
  const events = location.events || [];

  return {
    id: location.id,
    name: location.name,
    slug: location.slug,
    region: location.address || 'Việt Nam',
    province: location.address || 'Đang cập nhật',
    title: location.summary || location.name,
    summary: location.summary || '',
    description: location.description || location.summary || 'Đang cập nhật nội dung.',
    quote: location.summary || 'Dữ liệu lịch sử được lấy trực tiếp từ backend.',
    featuredImage,
    mapImage: assets.mapImage,
    period: events[0]?.period?.name || formatYearRange(events[0]?.startYear, events[0]?.endYear),
    coordinates: {
      longitude: location.longitude,
      latitude: location.latitude
    },
    type: assets.type,
    stats: [
      { label: 'Địa điểm', value: location.address || location.name },
      { label: 'Sự kiện', value: String(location._count?.events ?? events.length ?? 0) },
      { label: 'Dấu mốc', value: formatYearRange(events[0]?.startYear, events[0]?.endYear) }
    ],
    timelineMoments: events.map(mapEventToMoment),
    architectureGallery: galleryImages.slice(0, 3).map((image, index) => ({
      id: `${location.slug}-gallery-${index}`,
      title: location.images?.[index]?.caption || location.name,
      image
    })),
    figures: [],
    searchTags: [location.name, location.slug, location.address].filter(Boolean)
  };
}

export async function getLocations() {
  const locations = await apiGet('/locations', { limit: 100 });

  return locations.map(mapLocation);
}

export async function getLocationBySlug(slug) {
  const location = await apiGet(`/locations/${slug}`);

  return mapLocation(location);
}
