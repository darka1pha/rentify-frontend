import { Components, CssVarsTheme, Theme } from '@mui/material';

export const outlinedInput: Components<
  Omit<Theme, 'components' | 'palette'> & CssVarsTheme
>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
  },
};
