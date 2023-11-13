/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Anybody', 'sans-serif']
		},
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.414rem',
			'2xl': '2rem',
			'3xl': '2.827rem',
			'4xl': '4rem',
			'5xl': '5.653rem'
		},
		extend: {
			animation: {
				'spin-slow': 'spin 9s linear infinite'
			},
			textShadow: {
				DEFAULT: '-0.04em 0 0 #F22613,  0.04em 0 0 #00FFFF'
			},
			fontFamily: {
				heading: ['Anybody', 'sans-serif']
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
		themes: [
			'synthwave',
			{
				'irrelevant-dark': {
					primary: '#fb0089',
					secondary: '#0000ff',
					accent: '#ffdf00',
					neutral: '#1a1c32',
					'base-100': '#0e0e1a'
				}
			}
		]
	}
};
