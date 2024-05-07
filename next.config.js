/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
  }
   
  module.exports = {
    nextConfig,
    trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/perguntas',
          destination: '/faq',
          permanent: true,
        }
      ]
    }
  }
