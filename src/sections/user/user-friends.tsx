import type { Friend } from 'src/utils/types';

import React from 'react';

import { Grid, useTheme, Typography } from '@mui/material';

import FriendCard from 'src/components/cards/friend-card';

const UserFriends = ({ friendsList }: { friendsList: Friend[] }) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h4" sx={{ my: 3 }}>
        Friends
      </Typography>
      {friendsList.length !== 0 ? (
        <Grid container justifyContent="space-between" rowGap={3} columnGap={1}>
          {friendsList?.map((friend: Friend) => (
            <Grid item xs={12} md={2.75} sm={5} key={friend?.fullName}>
              <FriendCard friend={friend} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h4" sx={{ my: 3 }}>
          You have no friends 🥲
        </Typography>
      )}
    </>
  );
};

export default UserFriends;
