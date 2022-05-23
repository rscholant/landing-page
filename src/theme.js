import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { background: "#2D3540" },
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", "Inter", "sans-serif"].join(","),
    h6: { fontFamily: "Inter", fontWeight: "300" },
    body1: { fontFamily: "Inter" },
    body2: { fontFamily: "Inter" },
    subtitle1: { fontFamily: "Inter" },
    subtitle2: { fontFamily: "Inter" },
  },
  palette: {
    background: {
      paper: "#2D3540",
    },
    primary: {
      main: "#F2CE1B",
    },
    secondary: {
      main: "#F2DBAE",
    },
    error: {
      main: red.A400,
    },
  },
});
theme = responsiveFontSizes(theme, { factor: 2.9 });

export default theme;
