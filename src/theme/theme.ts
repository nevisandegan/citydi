
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "IRANSans, sans-serif",
  },
  direction: "rtl",
  palette: {
    primary: {
      main: "#3A5A40",
      light: "#A3B18A",
      dark: "#344E41",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#ffffff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    background: {
      default: "#DAD7CD",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontFamily: "IRANSans, sans-serif",
        },
        body: {
          fontFamily: "IRANSans, sans-serif",
          backgroundColor: "#DAD7CD"
        },
      },
    },
  },
});

export default theme;
