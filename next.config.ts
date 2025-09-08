import { NextConfig } from 'next';

// Import env here to validate during build.
import './src/env';

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
};

export default nextConfig;
