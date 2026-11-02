/**
 * Developer Toolkit Configuration Manager
 */

export const TOOLKIT_DEFAULTS = {
  version: '1.0.0',
  author: 'HARIRAM',
  environment: process.env.NODE_ENV || 'development',
  encoding: 'utf-8',
};

export function getToolkitConfig(overrides = {}) {
  return {
    ...TOOLKIT_DEFAULTS,
    ...overrides,
    timestamp: new Date().toISOString(),
  };
}
