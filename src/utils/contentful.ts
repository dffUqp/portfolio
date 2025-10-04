import { createClient } from 'contentful';
import { env } from 'env';

export const createContentClient = () => {
  return createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  });
};
const client = createContentClient();

export const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getSummary = async () => {
  const results = await getEntriesByType('summary');
  return results;
};
