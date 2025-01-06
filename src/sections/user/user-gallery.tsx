import React from 'react';

import { Card, Grid, Stack, Typography } from '@mui/material';

import { fDate } from 'src/utils/format-time';

type GalleryPost = {
  postImage: string;
  postDate: string;
  postTitle: string;
};

const UserGallery = ({ galleryPosts }: { galleryPosts: GalleryPost[] }) => (
  <>
    <Typography variant="h4" sx={{ my: 3 }}>
      Gallery
    </Typography>

    {galleryPosts?.length === 0 ? (
      <Typography variant="h4">No Posts</Typography>
    ) : (
      <Grid container rowGap={2.5} columnSpacing={2.5}>
        {galleryPosts?.map((post: GalleryPost) => (
          <Grid item xs={12} md={3} sm={6} key={post?.postTitle}>
            <Card
              sx={{
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${post?.postImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 300,
                display: 'flex',
                alignItems: 'flex-end',
                color: '#fff',
                borderRadius: 2.5,
              }}
            >
              <Stack
                sx={{ background: '#00000080', width: '100%', m: 0.5, p: 2, borderRadius: 2.5 }}
              >
                <Typography variant="h5" noWrap>
                  {post?.postTitle}
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  {fDate(post?.postDate)}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </>
);

export default UserGallery;
