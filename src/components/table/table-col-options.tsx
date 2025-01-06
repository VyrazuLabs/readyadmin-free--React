import type { Header } from '@tanstack/react-table';

import React from 'react';

import { Stack, Popover, MenuItem, IconButton, Typography } from '@mui/material';

import { Iconify } from '../iconify';

import type { ColProps } from './types';

type HeaderProps = Header<ColProps, unknown>;

const TableColOptions = ({ columnName, header }: { columnName: any; header: HeaderProps }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { column } = header;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack alignItems="center" direction="row" gap={0.5} sx={{ width: '100%' }}>
      <Typography variant="subtitle2">{columnName}</Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton size="small" onClick={handleClick}>
          <Iconify icon="eva:arrow-down-fill" sx={{ height: '0.85rem', width: '0.85rem' }} />
        </IconButton>
      </Stack>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            style: {
              maxWidth: '200px',
            },
          },
        }}
      >
        <MenuItem
          sx={{ fontSize: '13px', fontWeight: 500, gap: 1 }}
          onClick={() => {
            header.column.toggleSorting(false, false);
          }}
        >
          <Iconify icon="heroicons-outline:sort-ascending" />
          Sort ASC
        </MenuItem>
        <MenuItem
          sx={{ fontSize: '13px', fontWeight: 500, gap: 1 }}
          onClick={() => {
            header.column.toggleSorting(true, false);
          }}
        >
          <Iconify icon="heroicons-outline:sort-descending" />
          Sort DESC
        </MenuItem>
      </Popover>
    </Stack>
  );
};

export default TableColOptions;
