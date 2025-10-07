import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Container, Button, Stack } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Outlet, Link } from "react-router-dom";

const App = ({ toggleTheme, mode }) => {
  return (
    <>
      {/* Верхня панель */}
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Paris Transfers
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mr: 2 }}>
            <Button component={Link} to="/" color="inherit">Головна</Button>
            <Button component={Link} to="/transfers" color="inherit">Трансфери</Button>
          </Stack>

          {/* Кнопка перемикання теми */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Основний контент */}
      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
