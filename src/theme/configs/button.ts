import { Components, CssVarsTheme, Theme } from '@mui/material';

export const button: Components<
  Omit<Theme, 'components' | 'palette'> & CssVarsTheme
>['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      boxShadow: 'none',
    },
  },
  variants: [
    {
      props: { size: 'xLarge' },
      style: {
        height: 56,
      },
    },
    {
      props: { size: 'large' },
      style: {
        height: 48,
      },
    },
    {
      props: { size: 'medium' },
      style: {
        height: 40,
      },
    },
    {
      props: { size: 'small' },
      style: {
        height: 32,
      },
    },
  ],
};
