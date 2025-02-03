'use client';
import { createTheme } from '@mui/material/styles';
import { button, dark, light, outlinedInput, typography } from './configs';

//#region Theme Overrides
declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xLarge?: true;
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
  },
});

export default theme;
