import { LOGO_CHANGE, THEME_COLOR } from "./constants";
import { LOGO_KEYS, BG_COLORS } from "../constant/theme";


const logoUrls = {
  [LOGO_KEYS.LOGO1]: 'img/logo1.jpg',
  [LOGO_KEYS.BURGER_KING]: 'img/burger-king.svg'
};

const bgColors = {
  [BG_COLORS.BG1]: '#512314', 
  [BG_COLORS.BG2]: 'rgb(20 21 24)'
};

export const logoChange = (logo) => {
  return {
    type: LOGO_CHANGE,
    payload: logoUrls[logo],
  }
}

export const themeColorChange = (color) => {
  return {
    type: THEME_COLOR,
    payload: bgColors[color],
  }
}