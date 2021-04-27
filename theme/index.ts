import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

// Yep, Talking about fonts, we are so greedy 😁
const fonts = {
  ...chakraTheme.fonts,
  body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const colors = {
  ...chakraTheme.colors,
  brandBG: "#141432",
};

// Object that contains the default theme from chakra and our custom theme
const overrides = {
  ...chakraTheme,
  fonts,
  colors,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
    extraBold: 900,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
      body: {
        bg: "#1D1D42",
      },
    },
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
