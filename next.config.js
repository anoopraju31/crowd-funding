/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'm-cdn.phonearena.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
