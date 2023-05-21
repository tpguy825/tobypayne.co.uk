import nextpwa from "next-pwa";
const withPWA = nextpwa({
	dest: "public",
	maximumFileSizeToCacheInBytes: 3145728
});

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	images: {
		formats: ["image/webp"],
	},

	/**
	 * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
	 * out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};
export default withPWA(config);
