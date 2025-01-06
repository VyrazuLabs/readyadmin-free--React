import type { BoxProps } from '@mui/material/Box';

import { useId, forwardRef } from 'react';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';
import { SvgColor } from '../svg-color';

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    { width, href = '/', height, isSingle = false, disableLink = false, className, sx, ...other },
    ref
  ) => {
    const theme = useTheme();

    const gradientId = useId();

    const TEXT_PRIMARY = theme.vars.palette.text.primary;
    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARKER = theme.vars.palette.primary.dark;

    // OR using local (public folder)

    const singleLogo = (
      <Stack sx={{ width: '100%', height: '100%', gap: 0.5 }} direction="row" alignItems="flex-end">
        <SvgColor src="/logo_shape.svg" width={40} height="100%" color={PRIMARY_MAIN} />
        <SvgColor sx={{ bgcolor: TEXT_PRIMARY }} src="/logo_text.svg" width="60%" height="100%" />
      </Stack>
    );

    const fullLogo = (
      <Stack sx={{ width: '100%', height: '100%', p: 0.5 }} direction="row" alignItems="flex-end">
        <SvgColor src="/logo_shape.svg" width={40} height="100%" color={PRIMARY_MAIN} />
        <SvgColor
          sx={{ bgcolor: TEXT_PRIMARY, ml: -1 }}
          src="/logo_text.svg"
          width="60%"
          height="80%"
        />
      </Stack>
    );

    const baseSize = {
      width: width ?? 40,
      height: height ?? 60,
      ...(!isSingle && {
        width: width ?? '100%',
        height: height ?? 36,
      }),
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: 'inline-flex',
          verticalAlign: 'middle',
          ...(disableLink && { pointerEvents: 'none' }),
          ...sx,
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
