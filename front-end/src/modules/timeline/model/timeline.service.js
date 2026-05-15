import { apiGet } from '../../../shared/api-client';
import { formatYearRange } from '../../../shared/format';
import { getPeriodImage, getPeriodTheme } from './timeline.assets';

function mapPeriod(period) {
  return {
    id: period.id,
    title: period.name,
    period: formatYearRange(period.startYear, period.endYear),
    summary: period.summary || period.description || 'Dang cap nhat noi dung.',
    bulletPoints: [
      period.description,
      period._count?.events ? `${period._count.events} su kien lien quan` : null,
      period._count?.characters ? `${period._count.characters} nhan vat lien quan` : null
    ].filter(Boolean),
    image: getPeriodImage(period.slug),
    theme: getPeriodTheme(period.slug)
  };
}

export async function getTimelinePeriods() {
  const periods = await apiGet('/periods', { limit: 100 });

  return periods.map(mapPeriod);
}
