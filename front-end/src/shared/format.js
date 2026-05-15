export function formatYearRange(startYear, endYear) {
  if (!startYear && !endYear) {
    return 'Dang cap nhat';
  }

  const formatYear = (year) => {
    if (year === undefined || year === null) {
      return '';
    }

    return year < 0 ? `${Math.abs(year)} TCN` : String(year);
  };

  const start = formatYear(startYear);
  const end = formatYear(endYear);

  if (start && end) {
    return `${start} - ${end}`;
  }

  return start || end;
}

export function firstImage(images, fallbackImage) {
  return images?.[0]?.imageUrl || fallbackImage;
}
