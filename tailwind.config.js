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
				100: "#60606013",
				200: "#60606023",
				300: "#60606043",
				800: "#60606097",
				900: "#606060"
			},
			cgreen: "#66ACBF",
			cyellow: "#F7DA33"
		}
	},
	plugins: []
};
