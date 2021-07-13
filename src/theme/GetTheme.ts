import { DARK, WHITE } from './LocalTheme';
import DarkTheme from './themeTypes/DarkTheme';
import LightTheme from './themeTypes/LightTheme';
import WhiteTheme from './themeTypes/WhiteTheme';

const themes = {
	LightTheme,
	DarkTheme,
	WhiteTheme,
};

export default function GetTheme(theme: string) {
	switch (theme) {
		case DARK:
			return themes.DarkTheme;
		case WHITE:
			return themes.WhiteTheme;
		default:
			return themes.LightTheme;
	}
}
