import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // customizing h2 size
    // h2: {
    //   fontSize: 36,
    //   marginBottom: 15,
    // },
  },
  // defining palette for primary color
  palette: {
    primary: {
      main: "#e69456",
    },
    secondary: {
      main: "#a77898",
    },
  },
  // breakpoints: {
  // values: {
  //   xs: 0,
  //   sm: 799,
  //   md: 960,
  //   lg: 1280,
  //   xl: 1920,
  // },
  // },
});

export default theme;
