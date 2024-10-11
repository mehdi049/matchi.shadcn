/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iklsbmdx7uxraqfa.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
