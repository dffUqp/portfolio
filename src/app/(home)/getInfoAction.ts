import { unstable_cache } from 'next/cache';

import { env } from 'env';

import type { PortfolioInfo } from 'lib/info';

async function fetchPortfolioInfo(): Promise<PortfolioInfo> {
  const res = await fetch(`${env.BLOB_BASE_URL}/portfolio-info.json`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch portfolio info: ${res.status}`);
  }
  return res.json() as Promise<PortfolioInfo>;
}

export const getInfo = unstable_cache(fetchPortfolioInfo, ['portfolio-info'], {
  revalidate: 3600,
  tags: ['portfolio-info'],
});
