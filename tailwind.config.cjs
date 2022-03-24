const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				fcPrimary: '#a852c7'
			},
			dark: {
				...require('daisyui/src/colors/themes')['[data-theme=dark]'],
				primary: 'a852c7'
			}
		}
	},
	plugins: [require('daisyui')]
};
