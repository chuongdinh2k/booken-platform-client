import { ThemeColors } from "@/types/styles";
import { createTheme } from "@mui/material/styles";

// Module augmentation for Typescript to support the following custom properties
declare module "@mui/material/styles/createPalette" {
  interface Theme {
    colors: ThemeColors;
  }
  interface ThemeOptions {
    colors: ThemeColors;
  }
}
// For new colors, add object key to 'IColors' interface
export const colors = {
  /*Button*/
  buttonActive: "rgb(0, 116, 228)",
  buttonActiveHover: "#537FE7",
  buttonActiveDisabled: "#BDCDD6",
  /* Text */
  textPrimary: "#F5F5F5",
  textSecondary: "#9A9A9A",
  textDisabled: "#9A9A9A",
  textError: "#F55050",
  /* others */
  orange: "#CB7A00",
};

const defaultFontFamily = "DM Sans, Roboto, Arial, sans-serif";
/**
 * DEFAULT_THEME_CONFIG
 * Set global and re-usable style for project
 * Set default style for all MUI components
 * Allow overriding MUI default styles and props
 */
const themeConfig = {
  colors,
  breakpoints: {
    values: {
      xs: 600,
      sm: 992,
      md: 1200,
      lg: 1440,
      xl: 1600,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: defaultFontFamily,
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightLight: 300,
  },
};

export const theme = createTheme(themeConfig);
