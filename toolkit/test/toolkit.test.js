import test from 'node:test';
import assert from 'node:assert/strict';
import {
  slugify,
  camelToSnake,
  snakeToCamel,
  generateSecurePassword,
  hashToken,
  formatBytes,
  arrayToCsv,
} from '../src/index.js';

test('slugify generates clean slugs', () => {
  assert.equal(slugify('Hariram 003 Portfolio'), 'hariram-003-portfolio');
});

test('case conversions work accurately', () => {
  assert.equal(camelToSnake('userProfileData'), 'user_profile_data');
  assert.equal(snakeToCamel('user_profile_data'), 'userProfileData');
});

test('crypto generators work reliably', () => {
  const pwd = generateSecurePassword(18);
  assert.equal(pwd.length, 18);

  const hash = hashToken('secret-payload');
  assert.equal(typeof hash, 'string');
  assert.equal(hash.length, 64);
});

test('system formatting formats memory correctly', () => {
  assert.equal(formatBytes(1024), '1.00 KB');
  assert.equal(formatBytes(1048576), '1.00 MB');
});

test('arrayToCsv converts list correctly', () => {
  const csv = arrayToCsv([{ a: '1', b: '2' }]);
  assert.ok(csv.includes('a,b'));
});
