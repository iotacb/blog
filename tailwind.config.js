/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			minHeight: (theme) => ({
				...theme("spacing"),
			}),
			minWidth: (theme) => ({
				...theme("spacing"),
			}),
			maxHeight: (theme) => ({
				...theme("spacing"),
			}),
			maxWidth: (theme) => ({
				...theme("spacing"),
			}),
			colors: {
				card: "var(--card)",
				border: "var(--border)",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
