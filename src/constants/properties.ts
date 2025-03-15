import { PropertyType } from '@/types/property';
import { ChipProps } from '@mui/material';

export const PropertLabel: {
  [key: string]: { label: string; color: ChipProps['color'] };
} = {
  [PropertyType.APARTMENT]: {
    label: 'آپارتمان',
    color: 'primary',
  },
  [PropertyType.HOUSE]: {
    label: 'خانه',
    color: 'secondary',
  },
};
