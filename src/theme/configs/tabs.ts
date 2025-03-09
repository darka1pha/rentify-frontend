import { Components, CssVarsTheme, Theme } from '@mui/material';

export const tabs: Components<
  Omit<Theme, 'palette' | 'components'> & CssVarsTheme
>['MuiTabs'] = {
  variants: [
    {
      props: { variant: 'standard' },
      style: ({ theme }) => ({
        position: 'relative',
        backgroundColor: theme.palette.background.default,
        padding: 10,
        borderRadius: '12px',
        zIndex: 1,
        '& .MuiTabs-indicator': {
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: '12px',
          zIndex: 0,
        },
        '& .MuiTab-root': {
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.3s ease-in-out',
          color: theme.palette.text.secondary, // Inactive tab text color
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'white',
        },
      }),
    },
  ],
};
