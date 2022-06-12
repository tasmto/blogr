import { useState } from 'react';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import theme from './theme/theme';
import { routes } from './routes/routes';
import Navbar from './features/navigation/navbar/Navbar';

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100vh',
            minWidth: '100vw',
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={2} xs={12} md='auto' component='header'>
              <Navbar />
            </Grid>
            <Grid
              item
              sm={10}
              xs={12}
              md='auto'
              component='main'
              sx={{ paddingTop: 0 }}
            >
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
