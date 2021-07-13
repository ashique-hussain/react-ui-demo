import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { useContext, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

import LocalTheme from './LocalTheme';
import selectNewTheme from './SelectNewTheme';
const islocalStorage = typeof localStorage === 'undefined';

const ThemeSwitcher = () => {
	const THEME = selectNewTheme();
	const [currentTheme, setCurrentAppTheme] = useState(LocalTheme);
	const { setAppTheme } = useContext(ThemeContext);
	const handleThemeChange = () => {
		if (!islocalStorage) {
			localStorage.setItem('appTheme', THEME);
			setAppTheme(THEME);
			setCurrentAppTheme(THEME);
		}
	};
	return (
		<IconButton aria-label='theme switcher' color='inherit' onClick={handleThemeChange}>
			{currentTheme === 'dark' ? <BrightnessHighIcon /> : <Brightness4Icon />}
		</IconButton>
	);
};

export default ThemeSwitcher;
