/**
 * Data serialization and formatting helpers.
 */

export function arrayToCsv(items) {
  if (!Array.isArray(items) || items.length === 0) return '';
  const headers = Object.keys(items[0]);
  const rows = [headers.join(',')];

  for (const item of items) {
    const row = headers.map(h => JSON.stringify(item[h] ?? '')).join(',');
    rows.push(row);
  }
  return rows.join('\n');
}

export function prettyPrintJson(obj) {
  return JSON.stringify(obj, null, 2);
}
