import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
		screens: {
			phone: "480px",
			tablet: "640px",
			laptop: "1024px",
			desktop: "1280px",
		},
	},
	plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
