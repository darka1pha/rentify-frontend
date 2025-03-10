'use client';
import { createTheme } from '@mui/material/styles';
import { button, dark, light, outlinedInput, typography } from './configs';
import { paper } from './configs/paper';

//#region Theme Overrides
declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xLarge?: true;
  }
}

declare module '@mui/material/Tabs' {
  interface TabsPropsVariantOverrides {
    fill?: true;
  }
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    item?: string;
  }
}

//#endregion

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  direction: 'rtl',
  typography,
  colorSchemes: {
    light,
    dark,
  },
  components: {
    MuiButton: button,
    MuiOutlinedInput: outlinedInput,
    MuiPaper: paper,
  },
});

export default theme;
