/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'banner': 'url("https://www.saveur.com/uploads/2023/05/01-Charles-hoeing-summer-by-Edward-Dowding-scaled.jpg?auto=webp&optimize=high&quality=70&width=1440")'
			}
		},
	},
	plugins: [],
}
