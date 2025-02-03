import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = {
  fontFamily: 'var(--iran-yekan), Arial, sans-serif',
};
