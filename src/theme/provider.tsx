'use client';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from '.';
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
