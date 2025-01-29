'use client';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from '.';
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
