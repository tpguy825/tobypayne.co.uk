/** @type {import("prettier").Config} */
const config = {
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	tabWidth: 4,
	useTabs: true,
	printWidth: 115,
	arrowParens: "always",
	bracketSameLine: true,
	bracketSpacing: true,
	singleQuote: false,
	endOfLine: "crlf",
	trailingComma: "all",
	semi: true,
};

module.exports = config;
