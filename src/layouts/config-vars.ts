import type { Theme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

export const baseVars = (theme: Theme) => ({
  // nav
  '--layout-nav-bg': theme.vars.palette.common.white,
  '--layout-nav-border-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
  '--layout-nav-zIndex': 1101,
  '--layout-nav-mobile-width': '320px',
  // nav item
  '--layout-nav-item-height': '44px',
  '--layout-nav-item-color': theme.vars.palette.text.secondary,
  '--layout-nav-item-active-color': theme.vars.palette.primary.main,
  '--layout-nav-item-active-bg': varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
  '--layout-nav-item-hover-bg': varAlpha(theme.vars.palette.primary.mainChannel, 0.16),
  '--nav-item-sub-height': '36px',
  '--nav-bullet-size': '12px',
  '--nav-bullet-light-color': '#EDEFF2',
  '--nav-item-pt': '4px',
  '--nav-item-pr': '8px',
  '--nav-item-pb': '4px',
  '--nav-item-pl': '12px',
  '--nav-item-radius': '12px',
  '--nav-item-color': '#637381',
  '--nav-item-gap': '4px',
  '--submenu-nav-item-active-color': theme.vars.palette.secondary.dark,
  '--submenu-nav-item-active-bg': varAlpha(theme.vars.palette.secondary.lightChannel, 0.15),
  '--submenu-nav-item-hover-bg': varAlpha(theme.vars.palette.secondary.mainChannel, 0.25),
  // header
  '--layout-header-blur': '8px',
  '--layout-header-zIndex': 1100,
  '--layout-header-mobile-height': '64px',
  '--layout-header-desktop-height': '72px',
});
