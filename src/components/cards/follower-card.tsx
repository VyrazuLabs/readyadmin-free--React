import type { Follower } from 'src/utils/types';

import React, { useState } from 'react';

import { Card, Stack, Avatar, Button, useTheme, Typography } from '@mui/material';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from '../iconify';

const FollowerCard = ({ follower }: { follower: Follower }) => {
  const theme = useTheme();
  const [following, setFollowing] = useState(follower?.isFollowing);
  return (
    <Card
      key={follower.fullName}
      sx={{ p: 2, height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: '100%', gap: 1.5 }}
      >
        <Avatar
          alt={follower?.fullName}
          src={follower?.profilePicture}
          sx={{ height: 50, width: 50 }}
        />
        <Stack gap={0.25} justifyContent="flex-start" sx={{ flex: '1 1 auto', overflow: 'hidden' }}>
          <Typography variant="subtitle2" noWrap>
            {follower?.fullName}
          </Typography>
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ color: theme.palette.grey[600], fontSize: '13px' }}
          >
            {follower?.profession}
          </Typography>
          <Stack direction="row" gap={0.25} alignItems="center">
            <Iconify icon="mingcute:location-line" scale={0.25} />
            <Typography variant="caption" noWrap>
              {follower?.location}
            </Typography>
          </Stack>
        </Stack>
        {following ? (
          <Button
            size="small"
            variant="text"
            onClick={() => setFollowing((prev: boolean) => !prev)}
            color={following ? 'success' : 'inherit'}
            sx={{ px: 1 }}
            endIcon={following ? <Iconify icon="icon-park-solid:check-one" /> : ''}
          >
            {following ? 'Followed' : 'Follow'}
          </Button>
        ) : (
          <Button
            sx={{
              background: varAlpha(theme.palette.primary.lighterChannel, 0.7),
              borderRadius: 3,
            }}
            size="small"
            onClick={() => setFollowing((prev: boolean) => !prev)}
          >
            Follow
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default FollowerCard;
