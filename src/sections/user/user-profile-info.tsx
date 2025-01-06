import React from 'react';

import { Card, Grid, Stack, IconButton, Typography } from '@mui/material';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

import UserPosts from './user-posts';
import CreatePost from './create-post';

type PostProps = {
  postDate: string;
  postDescription: string;
  numberOfLikes: number;
  comments: Comments[];
  postMedia: string;
};

type Comments = {
  userName: string;
  profilePicture: string;
  comment: string;
  commentDate: string;
};

const ProfileInfo = ({ userProfileData }: { userProfileData: any }) => (
  <Grid container sx={{ mt: 3 }} justifyContent="space-between" rowGap={2}>
    <Grid item xs={12} md={4}>
      <Stack gap={3}>
        <Card sx={{ p: 2 }}>
          <Stack gap={2}>
            <Typography variant="h4">About</Typography>
            <Typography variant="subtitle2">{userProfileData?.about}</Typography>
          </Stack>
          <Stack gap={1} sx={{ mt: 5 }}>
            <Stack direction="row" gap={2} alignItems="center">
              <Iconify icon="mingcute:location-fill" />
              <Typography variant="subtitle2">
                Lives in <span style={{ fontWeight: 900 }}>{userProfileData?.location}</span>
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} alignItems="center">
              <Iconify icon="eva:email-fill" />
              <Typography variant="subtitle2">{userProfileData?.email}</Typography>
            </Stack>
            <Stack direction="row" gap={2} alignItems="center">
              <Iconify icon="hugeicons:new-job" />
              <Typography variant="subtitle2">
                {userProfileData?.position} at{' '}
                <span style={{ fontWeight: 900 }}>{userProfileData?.companyName}</span>
              </Typography>
            </Stack>
            <Stack direction="row" gap={2} alignItems="center">
              <Iconify icon="solar:book-linear" />
              <Typography variant="subtitle2">
                Studied at <span style={{ fontWeight: 900 }}>{userProfileData?.college}</span>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" mt={3}>
            <Typography variant="h4">Socials</Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              gap={0.5}
              flex="1 1 auto"
            >
              <IconButton
                size="small"
                sx={{
                  background: (theme) => varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
                }}
              >
                <Iconify icon="logos:facebook" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: (theme) => varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
                }}
              >
                <Iconify icon="skill-icons:instagram" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: (theme) => varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
                }}
              >
                <Iconify icon="skill-icons:linkedin" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: (theme) => varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
                }}
              >
                <Iconify icon="prime:twitter" sx={{ height: 16, width: 16 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Grid>
    <Grid item xs={12} md={7}>
      <Stack gap={2}>
        <CreatePost />
        {userProfileData?.posts?.map((post: PostProps) => (
          <UserPosts
            key={post?.postDescription}
            post={post}
            userInfo={{
              firstName: userProfileData?.firstName,
              lastName: userProfileData?.lastName,
              profilePicture: userProfileData?.profilePicture,
            }}
          />
        ))}
      </Stack>
    </Grid>
  </Grid>
);

export default ProfileInfo;
