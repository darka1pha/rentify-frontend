import { ColorSystemOptions } from '@mui/material';

export const dark: boolean | ColorSystemOptions | undefined = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0A84FF',
      light: '#58A6FF',
      dark: '#083A8A',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF4C4C',
      light: '#FF7878',
      dark: '#B20000',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00C781',
      light: '#00E1A7',
      dark: '#007C65',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#E6A100',
      light: '#FFCB47',
      dark: '#9C6D00',
      contrastText: '#000000',
    },
    background: {
      default: '#171717',
      paper: '#181818',
      item: '#1E1E1E',
    },
    text: {
      primary: '#E6EDF3',
      secondary: '#A1A1A1',
      gray: '#ffffff',
    },
  },
};
