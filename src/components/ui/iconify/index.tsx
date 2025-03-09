'use client';

import { forwardRef } from 'react';
import { Icon, IconProps } from '@iconify/react';

import Box, { BoxProps } from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

const iconifyClasses = {
  root: 'mnl__icon__root',
};

export type IconifyProps = BoxProps & IconProps;

const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ className, width = 20, sx, ...other }, ref) => {
    const baseStyles = {
      width,
      height: width,
      flexShrink: 0,
      display: 'inline-flex',
    };

    const renderFallback = (
      <Box
        component='span'
        className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
        sx={{ ...baseStyles, ...sx }}
      />
    );

    return (
      <NoSsr fallback={renderFallback}>
        <Box
          ref={ref}
          component={Icon}
          className={iconifyClasses.root.concat(
            className ? ` ${className}` : ''
          )}
          sx={{ ...baseStyles, ...sx }}
          {...other}
        />
      </NoSsr>
    );
  }
);

export default Iconify;
