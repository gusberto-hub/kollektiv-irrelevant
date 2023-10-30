/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 6s linear infinite'
			},
			textShadow: {
				DEFAULT: '-0.04em 0 0 #F22613,  0.04em 0 0 #00FFFF'
			}
		}
	},
	plugins: [
		require('daisyui'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		})
	],
	daisyui: {
		themes: ['synthwave']
	}
};
