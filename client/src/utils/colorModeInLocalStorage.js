const colorMode = "colorMode";

export const setColorModeInLocalStorage = (color) =>
  localStorage.setItem(colorMode, color);

export const getColor = () => localStorage.getItem(colorMode);

