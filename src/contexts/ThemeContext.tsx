import React from 'react';
import LocalTheme from '../theme/LocalTheme';

// creating theme context
const ThemeContext = React.createContext({
	currentTheme: LocalTheme,
	setAppTheme: (themeName: any) => {},
});

export default ThemeContext;
