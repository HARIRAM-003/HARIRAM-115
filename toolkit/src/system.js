import os from 'node:os';

/**
 * System and performance diagnostic tools.
 */

export function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

export function getSystemStats() {
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;

  return {
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus().length,
    memory: {
      total: formatBytes(total),
      used: formatBytes(used),
      free: formatBytes(free),
      usagePercent: `${((used / total) * 100).toFixed(1)}%`,
    },
  };
}
