// Read current theme from localStorage or maybe from an api
const islocalStorage = typeof localStorage === 'undefined';
const LocalTheme: string = (!islocalStorage && localStorage.getItem('appTheme')) || 'light';

export const isDarkTheme = !islocalStorage && localStorage.getItem('appTheme') === 'dark';

export const DARK = 'dark';
export const LIGHT = 'light';
export const WHITE = 'white';

export default LocalTheme;
