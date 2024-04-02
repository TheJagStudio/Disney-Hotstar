/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			display: ["Inter", "sans-serif"],
			body: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				darkBlue: "#072B9B",
				lightBlue: "#0E1421",
				primary: "#0f1014",
				"movie-card-bg": "#16181f",
			},
			backgroundColor: {
				darkBlue: "#072B9B",
				lightBlue: "#0E1421",
				primary: "#0f1014",
				"movie-card-bg": "#16181f",
			},
		},
	},
	plugins: [],
};
