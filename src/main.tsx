import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import { routes } from "./routes";
import theme from "./theme/theme";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>{routes}</Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
