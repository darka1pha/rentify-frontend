import { Components, CssVarsTheme, Theme } from '@mui/material';

export const paper: Components<
  Omit<Theme, 'components' | 'palette'> & CssVarsTheme
>['MuiPaper'] = {
  styleOverrides: {
    root: {
      borderRadius: 18,
      boxShadow: 'rgba(37, 83, 185, 0.1) 0px 2px 6px',
    },
  },
};
