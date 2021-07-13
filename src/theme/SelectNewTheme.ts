import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

import { DARK, LIGHT } from './LocalTheme';

const SelectNewTheme = () => {
	const { currentTheme } = useContext(ThemeContext);
	return currentTheme === DARK ? LIGHT : DARK;
};

export default SelectNewTheme;
