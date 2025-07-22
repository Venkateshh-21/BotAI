import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import History from "./Pages/Pastconvo.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
const theme = createTheme({
  palette: {
    primary: {
      main: "#D7C7F4",
      dark: "#AF9FCD",
      backGround: "#AF9FCD",
      bgTheme: "#FAF7FF",
      bglight: "#fafafa",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    h1: {
      fontWeight: "700",
      fontSize: "30",
      color: "#9785BA",
      fontFamily: "Ubuntu,sans-serif",
    },
    h2: {
      fontWeight: "500",
      fontSize: "28",
      color: "text.primary",
      fontFamily: "Ubuntu,sans-serif",
    },
    heading: {
      fontFamily: "Ubuntu,sans-serif",
    },
    body1: {
      fontFamily: "Ubuntu,sans-serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        disableElevation: "true",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Ubuntu.sans-serif",
        },
        outlined: {
          fontFamily: "Ubuntu,sans-serif",
          backgroundColor: "#9785BA",
          "&:hover": {
            backGround: "#AF9FCD",
          },
          color: "#fffff",
        },
        contained: {
          fontFamily: "Ubuntu,sans-serif",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 100,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
