/** @type {import('tailwindcss').Config} */
module.exports = {
	// command/ npx tailwindcss -i ./src/assets/css/inputs_styles.css -o ./public/css/outputs_styles.css --minify --watch
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				reg: ["Inter, sans-serif"],
				medium: ["Inter, sans-serif"],
				semibold: ["Inter, sans-serif"],
				bold: ["Inter, sans-serif"],
				extrabold: ["Inter, sans-serif"],
				black: ["Inter, sans-serif"]
			}
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			cwhite: "#FAFAFA",
			cblack: "#023948",
			cgray: {
				100: "#e6ebed",
				200: "#ccd7da",
				300: "#b3c4c8",
				400: "#9ab0b6",
				500: "#819ca4",
				600: "#678891",
				700: "#4e747f",
				800: "#1b4d5a",
				900: "#023948"
			},
			cgreen: "#66ACBF",
			cyellow: "#F7DA33"
		}
	},
	plugins: []
};
