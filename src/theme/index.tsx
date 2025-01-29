'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--iran-yekan), Arial, sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#0D6EFD',
          light: '#4791ff',
          dark: '#004ec2',
          contrastText: '#ffffff',
        },
        error: {
          main: '#c30000',
          light: '#ed2e2e',
          dark: '#9a0000',
          contrastText: '#ffffff',
        },
        success: {
          main: '#00966d',
          light: '#00b38b',
          dark: '#00624a',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#a9791c',
          light: '#f4b740',
          dark: '#7a5a12',
          contrastText: '#000000',
        },
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
        text: {
          primary: '#000000',
          secondary: '#5c5c5c',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#0A58CA',
          light: '#3A8DFF',
          dark: '#083A8A',
          contrastText: '#ffffff',
        },
        error: {
          main: '#ff4c4c',
          light: '#ff7878',
          dark: '#b20000',
          contrastText: '#ffffff',
        },
        success: {
          main: '#00b894',
          light: '#00e1a7',
          dark: '#007c65',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#e6a100',
          light: '#ffcb47',
          dark: '#9c6d00',
          contrastText: '#000000',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
        },
      },
    },
  },
});

export default theme;
