import type { ColumnDef } from '@tanstack/react-table';
import type { User } from 'src/components/table/types';

import { Helmet } from 'react-helmet-async';

import { Box, Card, Chip, Stack, Avatar, Container, Typography } from '@mui/material';

import { _users } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import DataTable from 'src/components/table/data-table';

const UserList = () => {
  const userList = _users;
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'id',
      id: 'id',
      header: 'ID',
      size: 200,
      cell: (info) => info.getValue() && (info.getValue() as string).slice(-6).toUpperCase(),
    },
    {
      accessorKey: 'avatarUrl',
      id: 'avatarUrl',
      header: 'Photo',
      size: 200,
      cell: (info) => (
        <Avatar
          src={info.getValue() ? (info.getValue() as string) : ''}
          style={{
            height: 50,
            width: 50,
          }}
          alt="user"
        />
      ),
    },
    { accessorKey: 'name', id: 'name', header: 'Name', size: 200, cell: (info) => info.getValue() },
    {
      accessorKey: 'company',
      id: 'company',
      header: 'Company',
      size: 200,
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'isVerified',
      id: 'isVerified',
      header: 'Verified',
      size: 200,
      cell: (info) => (
        <Stack direction="row" alignItems="center" gap={1}>
          <Box
            component="img"
            sx={{ height: '18px', width: '18px' }}
            src={
              info.getValue() === true
                ? '/assets/icons/verified.png'
                : '/assets/icons/unverified.png'
            }
          />
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: (theme) =>
                info.getValue() === true
                  ? theme.vars.palette.success.main
                  : theme.vars.palette.error.main,
            }}
          >
            {info.getValue() === true ? 'Verified' : 'Not verified'}
          </Typography>
        </Stack>
      ),
    },

    { accessorKey: 'role', id: 'role', header: 'Role', size: 200, cell: (info) => info.getValue() },
    {
      accessorKey: 'status',
      id: 'status',
      header: 'Status',
      size: 200,
      cell: (info) => (
        <Chip
          sx={{
            '.MuiChip-label': { textTransform: 'capitalize', fontWeight: 700, fontSize: '12px' },
          }}
          label={info.getValue() as string}
          color={info.getValue() === 'active' ? 'success' : 'error'}
        />
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title> {`Users List - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container>
          <Typography variant="h4">List</Typography>
          <Card sx={{ p: 2, my: 3 }}>
            <DataTable tColumns={columns} tData={userList} />
          </Card>
        </Container>
      </DashboardContent>
    </>
  );
};

export default UserList;
