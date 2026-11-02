/**
 * Text and string manipulation utility helpers.
 */

export function slugify(str) {
  if (!str) return '';
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function camelToSnake(str) {
  if (!str) return '';
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '');
}

export function snakeToCamel(str) {
  if (!str) return '';
  return str.replace(/(_\w)/g, m => m[1].toUpperCase());
}

export function wordStats(text) {
  if (!text || typeof text !== 'string') return { words: 0, characters: 0 };
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return { words, characters: text.length };
}
