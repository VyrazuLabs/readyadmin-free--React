import type { Friend } from 'src/utils/types';

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

import { varAlpha } from 'src/theme/styles';

import { Iconify } from '../iconify';

const FriendCard = ({ friend }: { friend: Friend }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        p: 2,
        minHeight: 240,
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container columnSpacing={2} alignItems="center" flexWrap="nowrap">
        <Grid item xs={5}>
          <Avatar
            alt={friend?.fullName}
            src={friend?.profilePicture}
            sx={{ height: '100%', width: '100%' }}
          />
        </Grid>
        <Grid item xs={7}>
          <Stack gap={2}>
            <Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: theme.palette.grey[600] }}
              >
                Username
              </Typography>
              <Typography variant="subtitle2">{friend?.fullName}</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: theme.palette.grey[600] }}
              >
                Job
              </Typography>
              <Typography variant="subtitle2">{friend?.workPosition}</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
        sx={{ flex: '1 1 auto', flexWrap: 'wrap' }}
      >
        <Stack direction="row" alignItems="center" gap={0.5}>
          <IconButton
            size="small"
            sx={{
              background: varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
            }}
          >
            <Iconify icon="logos:facebook" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              background: varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
            }}
          >
            <Iconify icon="skill-icons:instagram" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              background: varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
            }}
          >
            <Iconify icon="skill-icons:linkedin" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              background: varAlpha(theme.vars.palette.primary.lighterChannel, 0.4),
            }}
          >
            <Iconify icon="prime:twitter" sx={{ height: 16, width: 16 }} />
          </IconButton>
        </Stack>
        <Button
          size="small"
          sx={{
            borderRadius: 3,
            px: 1,
            background: varAlpha(theme.palette.primary.lighterChannel, 0.7),
          }}
        >
          Message
        </Button>
      </Stack>
    </Card>
  );
};

export default FriendCard;
