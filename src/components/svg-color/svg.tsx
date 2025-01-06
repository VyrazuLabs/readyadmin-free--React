import { forwardRef } from 'react';

import Box from '@mui/material/Box';

import { svgColorClasses } from './classes';

import type { DefaultSvgProps } from './types';

// ----------------------------------------------------------------------

export const DefaultSvg = forwardRef<HTMLSpanElement, DefaultSvgProps>(
  ({ src, width = 24, height, className, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component="span"
      className={svgColorClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width,
        flexShrink: 0,
        height: height ?? width,
        bgcolor: 'none',
        display: 'inline-flex',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);
