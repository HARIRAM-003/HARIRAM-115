import crypto from 'node:crypto';

/**
 * Cryptographic security utilities.
 */

export function generateSecurePassword(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, chars.length);
    password += chars[randomIndex];
  }
  return password;
}

export function hashToken(token, algorithm = 'sha256') {
  return crypto.createHash(algorithm).update(token).digest('hex');
}

export function generateUUID() {
  return crypto.randomUUID();
}
