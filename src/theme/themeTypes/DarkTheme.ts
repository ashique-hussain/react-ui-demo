import { createTheme } from '@material-ui/core/styles';

// Dark theme
const DarkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#1a73e8',
		},
		secondary: {
			main: '#FF9933',
		},
		common: {
			black: '#313131',
			white: '#f2f2f2',
		},
		error: {
			main: '#ff1744',
		},
	},
	typography: {
		h1: {
			fontFamily: "'Exo', 'sans-serif'",
		},
		h2: {
			fontFamily: "'Exo', 'sans-serif'",
		},
		h3: {
			fontFamily: "'Exo', 'sans-serif'",
		},
		h4: {
			fontFamily: "'Exo', 'sans-serif'",
		},
		h5: {
			fontFamily: "'Exo', 'sans-serif'",
		},
		h6: {
			fontFamily: "'Exo', 'sans-serif'",
		},
	},
});

export default DarkTheme;
