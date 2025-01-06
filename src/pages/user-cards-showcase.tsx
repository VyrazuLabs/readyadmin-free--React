/* eslint-disable */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Box,
  Card,
  Grid,
  Stack,
  Avatar,
  Container,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';

import { sampleUsers } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { fNumber, fShortenNumber } from 'src/utils/format-number';
import { User } from 'src/utils/types';
import UserCard from 'src/components/cards/user';

const UserCardsShowCase = () => {
  const theme = useTheme();
  const [users, setUsers] = useState<User[]>(sampleUsers);
  return (
    <>
      <Helmet>
        <title> {`Users Card - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container>
          <Typography variant="h4" sx={{ my: 3 }}>
            User Cards
          </Typography>
          <Grid container justifyContent="space-between" rowGap={3} columnGap={1}>
            {users?.map((user: User) => (
              <Grid item xs={12} md={3.5} key={user?.fullName}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </DashboardContent>
    </>
  );
};

export default UserCardsShowCase;
