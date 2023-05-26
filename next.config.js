/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	trailingSlash: true,
	reactStrictMode: false,

	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ['mongoose'],
	},
	webpack(config) {
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},

	images: {
		domains: [
			'w.forfun.com',
			'i.pinimg.com',
			'images.pexels.com',
			'images.unsplash.com',
			'img.rawpixel.com',
		],
	},
};
