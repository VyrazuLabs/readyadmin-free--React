import React, { useState } from 'react';

import { Box, Collapse, ListItem, ListItemButton } from '@mui/material';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

type subMenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

type MenuItem = {
  path: string;
  title: string;
  icon: React.ReactNode;
  info?: string;
  hasSubMenu: boolean;
  subMenu: subMenuItem[];
};

const NavSubMenu = ({ menuItem }: { menuItem: MenuItem }) => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const isActived = pathname.split('/').includes(menuItem?.path.slice(1));

  const subMenuItems = menuItem?.subMenu.map((item: subMenuItem) => {
    const isSubLinkActive = item.path === pathname;
    return (
      <ListItem disableGutters disablePadding key={item.path}>
        <ListItemButton
          disableGutters
          component={RouterLink}
          href={item.path}
          sx={{
            p: 1.25,
            gap: 1,
            borderRadius: 'var(--nav-item-radius)',
            color: 'var(--nav-item-color)',
            minHeight: 'var(--nav-item-sub-height)',
            typography: 'body2',
            width: '100%',
            fontWeight: 'fontWeightMedium',
            alignItems: 'center',
            ...(isSubLinkActive && {
              fontWeight: 'fontWeightSemiBold',
              bgcolor: 'var(--submenu-nav-item-active-bg)',
              color: 'var(--submenu-nav-item-active-color)',
              '&:hover': {
                bgcolor: 'var(--submenu-nav-item-hover-bg)',
              },
            }),
            '&::before': {
              left: '0px',
              content: '""',
              position: 'absolute',
              width: 'var(--nav-bullet-size)',
              height: 'var(--nav-bullet-size)',
              transform:
                'translate(calc(var(--nav-bullet-size)* -1), calc(var(--nav-bullet-size)* -0.4))',
              backgroundColor: 'var(--nav-bullet-light-color)',
              mask: `url(/assets/icons/tree.svg) 50% 50% / 100% no-repeat`,
            },
          }}
        >
          <Box component="span" sx={{ width: 20, height: 20 }}>
            {item?.icon}
          </Box>

          <Box component="span" flexGrow={1}>
            {item.title}
          </Box>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <ListItem
      disableGutters
      disablePadding
      key={menuItem.title}
      sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <ListItemButton
        disableGutters
        sx={{
          p: 1.5,
          gap: 2,
          width: '100%',
          borderRadius: 1.5,
          typography: 'body2',
          fontWeight: 'fontWeightMedium',
          color: 'var(--layout-nav-item-color)',
          minHeight: 'var(--layout-nav-item-height)',
          ...(isActived && {
            fontWeight: 'fontWeightSemiBold',
            bgcolor: 'var(--layout-nav-item-active-bg)',
            color: 'var(--layout-nav-item-active-color)',
            '&:hover': {
              bgcolor: 'var(--layout-nav-item-hover-bg)',
            },
          }),
        }}
        onClick={() => setOpenSubMenu((prev: boolean) => !prev)}
      >
        <Box component="span" sx={{ width: 24, height: 24 }}>
          {menuItem.icon}
        </Box>

        <Box component="span" flexGrow={1}>
          {menuItem.title}
        </Box>

        {menuItem.info && (
          <Iconify
            icon={menuItem.info}
            sx={{
              transition: 'all 0.25s ease',
              transform: openSubMenu ? 'rotate(90deg)' : 'none',
            }}
          />
        )}
      </ListItemButton>
      <Collapse in={openSubMenu} timeout="auto" unmountOnExit sx={{ pl: 3, width: '100%' }}>
        <Box
          component="ul"
          gap={0.5}
          display="flex"
          flexDirection="column"
          sx={{
            pl: 'var(--nav-bullet-size)',
            position: 'relative',
            '&::before': {
              top: '0px',
              left: '0px',
              width: '2px',
              content: '""',
              position: 'absolute',
              bottom: 'calc(var(--nav-item-sub-height) - 2px - var(--nav-bullet-size) / 2)',
              backgroundColor: 'var(--nav-bullet-light-color)',
            },
            '&:first-of-type': {
              mt: 'var(--nav-item-gap)',
            },
          }}
        >
          {subMenuItems}
        </Box>
      </Collapse>
    </ListItem>
  );
};

export default NavSubMenu;
