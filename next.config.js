/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com", "assets.aceternity.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(glsl|vs|fs|vert|frag)$/,
			use: ["raw-loader"],
		});
		return config;
	},
};

module.exports = nextConfig;
