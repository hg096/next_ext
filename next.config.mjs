/** @type {import('next').NextConfig} */
// next.config.mjs

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'), // '@' 별칭 설정
      '@a': path.resolve('./src/app') // '@a' 별칭 설정
    };
    return config;
  },
};

export default nextConfig;