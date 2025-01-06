import type { Follower } from 'src/utils/types';

import { Grid, Typography } from '@mui/material';

import FollowerCard from 'src/components/cards/follower-card';

const UserFollowers = ({ followers }: { followers: Follower[] }) => (
  <>
    <Typography variant="h4" sx={{ my: 3 }}>
      Followers
    </Typography>
    <Grid container justifyContent="space-between" rowGap={2}>
      {followers?.length ? (
        followers?.map((follower: Follower) => (
          <Grid item xs={12} md={3.5} key={follower?.fullName}>
            <FollowerCard follower={follower} />
          </Grid>
        ))
      ) : (
        <Typography variant="h4">You have no followers.</Typography>
      )}
    </Grid>
  </>
);

export default UserFollowers;
