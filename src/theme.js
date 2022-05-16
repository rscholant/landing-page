import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    primary: {
      main: "#152349",
    },
    secondary: {
      main: "#141c3a",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
