const INDONESIAN_MONTHS: Record<string, string> = {
  januari: 'January',
  februari: 'February',
  maret: 'March',
  april: 'April',
  mei: 'May',
  juni: 'June',
  juli: 'July',
  agustus: 'August',
  september: 'September',
  oktober: 'October',
  november: 'November',
  desember: 'December',
};

/**
 * Parses Indonesian date string (e.g. "3 Oktober 2026") into a valid JS Date object.
 */
export function parseIndonesianDate(dateStr: string): Date {
  if (!dateStr) return new Date();
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parts[0];
    const month = INDONESIAN_MONTHS[parts[1].toLowerCase()] || parts[1];
    const year = parts[2];
    const parsed = new Date(`${day} ${month} ${year}`);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  const fallback = new Date(dateStr);
  return isNaN(fallback.getTime()) ? new Date() : fallback;
}

/**
 * Converts Indonesian date string to ISO 8601 string for Schema.org JSON-LD.
 */
export function toIsoDate(dateStr: string): string {
  try {
    return parseIndonesianDate(dateStr).toISOString();
  } catch {
    return new Date().toISOString();
  }
}
