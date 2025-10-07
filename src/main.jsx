import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Transfers from "./pages/Transfers";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "./theme";

const Main = () => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App toggleTheme={toggleTheme} mode={mode} />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/transfers", element: <Transfers /> }
      ]
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
