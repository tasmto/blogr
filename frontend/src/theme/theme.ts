import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { darkMode } from './darkMode';
import { lightMode } from './lightMode';

// todo: use redux for theme switching
const mode: 'light' | 'dark' | string = 'light';

const selectedPallet = mode === 'light' ? lightMode : darkMode;

const theme = createTheme({
  ...selectedPallet,
  typography: {
    htmlFontSize: 16,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.6rem',
    },
    h3: {
      fontSize: '1.3rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '4rem',
      lineHeight: 1.4,
    },
    button: {
      fontSize: '1rem',
    },
  },
});
export default theme;
