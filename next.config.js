/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  nextConfig,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ]
      }
    ]
  },
  env: {
    HOST_URL: process.env.HOST_URL,
    POCKETBASE_URL: process.env.POCKETBASE_URL,
  }
} 
