module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				header: ['Raleway', 'Roboto'],
				handwritten: ['Praise', 'Roboto'],
			},
			colors: {
				primary: '#0b8a8d',
				secondary: '#a8492a',
				tertiary: '#e2bfb1',
				quartiary: '#2f1008',
				text: '#2f1008',
				'white-transparent': 'rgba(255, 255, 255, 0.267)',
				'white-transparent-less': 'rgba(255, 255, 255, 0.5)',
			},
			boxShadow: {
				opaque: '0rem 0.5rem 1rem -0.5rem rgb(0, 0, 0)',
			},
			maxWidth: {
				'1/3': '33.3%',
				'1/2': '50%',
				'3/4': '75%',
			},
			animation: {
				'appear-top': 'appearTop 400ms ease-out',
			},
		},
	},
	plugins: [],
}
