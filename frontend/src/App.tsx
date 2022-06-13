import { useState } from 'react';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import theme from './theme/theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { routes } from './routes/routes';
import Navbar from './features/navigation/navbar/Navbar';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100vh',
              maxWidth: '100vw',
              ml: 0,
              mr: 0,
            }}
          >
            <Grid
              container
              item
              spacing={2}
              sx={{
                maxWidth: '100vw',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <Grid
                item
                sm={2}
                xs={12}
                md='auto'
                component='header'
                sx={{ width: { md: '100px' }, pl: '0px !important' }}
              >
                <Navbar />
              </Grid>
              <Grid
                item
                sm={10}
                xs={12}
                md='auto'
                component='main'
                sx={{
                  paddingTop: 0,
                  width: { sm: '100%', md: 'calc(100% - 100px)' },
                  pl: '0px !important',
                }}
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
      </Provider>
    </Router>
  );
}

export default App;
