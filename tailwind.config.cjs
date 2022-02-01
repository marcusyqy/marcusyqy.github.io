module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			big: ['"Helvetica Neue"', '"Helvetica"', '"Arial"', 'sans-serif'],
			small: ['"Fira Code"', 'monospace']
		},
		screens: {
			mobile: { max: '767px' }
		},
		colors: {
			teal: '#01d8b7',
			grey: '#1a1a1a'
		}
	},
	plugins: []
};
