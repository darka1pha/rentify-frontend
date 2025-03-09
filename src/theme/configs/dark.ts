import { ColorSystemOptions } from '@mui/material';

export const dark: boolean | ColorSystemOptions | undefined = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0A84FF', // Brighter blue for a more modern look
      light: '#58A6FF', // Soft sky blue for contrast
      dark: '#083A8A', // Keeping the deep blue
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF4C4C', // Keeping the same strong red
      light: '#FF7878', // Softer red for alerts
      dark: '#B20000', // Deep red for warnings
      contrastText: '#ffffff',
    },
    success: {
      main: '#00C781', // A slightly richer green
      light: '#00E1A7', // A more vibrant tone for highlights
      dark: '#007C65', // Deep teal
      contrastText: '#ffffff',
    },
    warning: {
      main: '#E6A100', // Gold-like yellow
      light: '#FFCB47', // Brighter shade
      dark: '#9C6D00', // Deep amber
      contrastText: '#000000',
    },
    background: {
      default: '#171717', // Even darker for a sleek look
      paper: '#181818', // Slightly lighter for card surfaces
      item: '#1E1E1E', // Consistent with your original item shade
    },
    text: {
      primary: '#E6EDF3', // Slightly softened white for better readability
      secondary: '#A1A1A1', // Adjusted gray for better contrast
    },
  },
};
