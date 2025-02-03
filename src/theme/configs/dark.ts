import { ColorSystemOptions } from '@mui/material';

export const dark: boolean | ColorSystemOptions | undefined = {
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
      default: '#171616',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
};
