import type { User } from 'src/utils/types';

import React from 'react';

import {
  Box,
  Card,
  Grid,
  Stack,
  Avatar,
  Button,
  Divider,
  useTheme,
  IconButton,
  Typography,
} from '@mui/material';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from '../iconify';

const UserCard = ({ user }: { user: User }) => {
  const theme = useTheme();
  return (
    <Card sx={{ p: 2, maxWidth: '350px' }}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Avatar src={user.profilePicture} sx={{ height: '80px', width: '80px' }} />
        </Grid>
        <Grid item xs={6}>
          <Stack gap={2}>
            <Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: theme.palette.grey[500] }}
              >
                Username
              </Typography>
              <Typography variant="subtitle2">{user.fullName}</Typography>
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: theme.palette.grey[500] }}
                >
                  Posts
                </Typography>
                <Typography variant="subtitle2">{user.totalPosts}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 700, color: theme.palette.grey[500] }}
                >
                  Following
                </Typography>
                <Typography variant="subtitle2">{user.followingCount}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />

      <Stack gap={1.5}>
        <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, color: theme.palette.grey[500] }}>
              Followers
            </Typography>
            <Typography variant="h4">{fShortenNumber(user.followerCount)}</Typography>
          </Box>
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Box
              sx={{
                px: 1.5,
                height: '20px',
                width: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 1.5,
                background:
                  user.followerCount % 2 === 0
                    ? theme.palette.success.lighter
                    : theme.palette.error.lighter,
              }}
            >
              {user.followerCount % 2 === 0 ? (
                <Iconify
                  icon="tabler:arrow-up"
                  height="16px"
                  width="16px"
                  color={theme.palette.success.dark}
                />
              ) : (
                <Iconify
                  icon="tabler:arrow-down"
                  height="16px"
                  width="16px"
                  color={theme.palette.error.dark}
                />
              )}
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                color:
                  user.followerCount % 2 === 0
                    ? theme.palette.success.dark
                    : theme.palette.error.dark,
                fontSize: '12px',
              }}
            >
              8.16%
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton size="small">
              <Iconify icon="logos:facebook" />
            </IconButton>
            <IconButton size="small">
              <Iconify icon="skill-icons:instagram" />
            </IconButton>
            <IconButton size="small">
              <Iconify icon="skill-icons:linkedin" />
            </IconButton>
            <IconButton size="small">
              <Iconify icon="prime:twitter" sx={{ height: 16, width: 16 }} />
            </IconButton>
          </Stack>
          <Button
            size="small"
            endIcon={<Iconify icon="mingcute:arrow-right-fill" height="0.75em" width="0.75em" />}
          >
            View
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UserCard;
