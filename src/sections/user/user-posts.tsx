import {
  Box,
  Card,
  Stack,
  Avatar,
  Checkbox,
  IconButton,
  Typography,
  AvatarGroup,
  OutlinedInput,
  FormControlLabel,
} from '@mui/material';

import { fDate } from 'src/utils/format-time';

import { Iconify } from 'src/components/iconify';

type UserInfoProps = {
  firstName: string;
  lastName: string;
  profilePicture: string;
};

type Comments = {
  userName: string;
  profilePicture: string;
  comment: string;
  commentDate: string;
};

type PostProps = {
  postDate: string;
  postDescription: string;
  numberOfLikes: number;
  comments: Comments[];
  postMedia: string;
};

const UserPosts = ({ post, userInfo }: { post: PostProps; userInfo: UserInfoProps }) => {
  const { comments, postDate, postDescription, postMedia, numberOfLikes } = post;
  const { firstName, lastName, profilePicture } = userInfo;
  return (
    <Card sx={{ p: 1 }}>
      <Stack gap={3}>
        <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
          <Stack direction="row" gap={1.5} alignItems="center">
            <Avatar alt={`${firstName} ${lastName}`} src={profilePicture} />
            <Stack gap={0.25}>
              <Typography variant="subtitle2">
                {firstName} {lastName}
              </Typography>
              <Typography variant="caption">{fDate(postDate)}</Typography>
            </Stack>
          </Stack>
          <IconButton>
            <Iconify icon="mage:dots" />
          </IconButton>
        </Stack>

        <Typography variant="subtitle2" sx={{ px: 1 }}>
          {postDescription}
        </Typography>

        <Box
          component="img"
          sx={{
            height: { xs: 250, md: 350 },
            width: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
            aspectRatio: '4/3',
            objectPosition: 'center',
          }}
          src={postMedia}
          alt={postDescription}
        />

        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={1} sx={{ px: 1 }} alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<Iconify icon="solar:heart-outline" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" sx={{ color: '#ff562f' }} />}
                />
              }
              label={numberOfLikes}
            />
            {comments?.length !== 0 && (
              <AvatarGroup max={4}>
                {comments?.map((comment: Comments) => (
                  <Avatar
                    alt={comment?.userName}
                    src={comment?.profilePicture}
                    key={comment?.comment}
                  />
                ))}
              </AvatarGroup>
            )}
          </Stack>
          <Stack direction="row" gap={1}>
            <IconButton>
              <Iconify icon="solar:bookmark-bold-duotone" />
            </IconButton>
            <IconButton>
              <Iconify icon="ri:share-line" />
            </IconButton>
          </Stack>
        </Stack>

        {comments?.length !== 0 && (
          <Stack gap={2}>
            {comments?.map((comment: Comments) => (
              <Stack direction="row" key={comment?.comment} gap={1}>
                <Avatar
                  alt={comment?.userName}
                  src={comment?.profilePicture}
                  key={comment?.comment}
                />
                <Stack
                  gap={0.5}
                  sx={{ background: '#e4e4e480', width: '100%', p: 1, borderRadius: '8px' }}
                >
                  <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Typography variant="subtitle2">{comment?.userName}</Typography>
                    <Typography variant="caption">{fDate(comment?.commentDate)}</Typography>
                  </Stack>
                  <Typography variant="caption">{comment?.comment}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        )}
        <Stack direction="row" gap={2}>
          <Avatar alt={`${firstName} ${lastName}`} src={profilePicture} />
          <OutlinedInput
            size="small"
            placeholder="Write a comment"
            fullWidth
            sx={{ pr: 0.5 }}
            endAdornment={
              <Stack direction="row" gap={0.5}>
                <IconButton>
                  <Iconify icon="mage:image" />
                </IconButton>
                <IconButton>
                  <Iconify icon="mingcute:emoji-fill" />
                </IconButton>
              </Stack>
            }
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default UserPosts;
