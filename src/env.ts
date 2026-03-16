import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    BLOB_READ_WRITE_TOKEN: z.string().min(1),
    BLOB_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
    BLOB_BASE_URL: process.env.BLOB_BASE_URL,
  },
});

export { env };
