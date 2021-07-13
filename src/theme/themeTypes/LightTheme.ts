import { createTheme } from '@material-ui/core/styles';

//default theme
const LightTheme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#1a73e8',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			// light: will be calculated from palette.primary.main,
			main: '#b5147c',
			// dark: will be calculated from palette.secondary.main,
			// contrastText: //'#f1f1f1', //will be calculated to contrast with palette.primary.main
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		error: {
			main: '#ff1744',
		},
		common: {
			black: '#313131',
			white: '#f2f2f2',
		},
		background: {
			default: '#f5f5f5',
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

export default LightTheme;
