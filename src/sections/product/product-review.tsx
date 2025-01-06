/* eslint-disable */
import {
  Box,
  Grid,
  Stack,
  Avatar,
  Button,
  Rating,
  Typography,
  LinearProgress,
  useTheme,
} from '@mui/material';

import { fShortenNumber } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import dayjs from 'dayjs';
import { varAlpha } from 'src/theme/styles';

type Review = {
  customerName: string;
  profilePicture: string;
  postDate: string;
  rating: number;
  isVerified: boolean;
  title: string;
  description: string;
  reviewLikes: number;
  reviewDislikes: number;
};

const ratingLabels = {
  fiveStarReviews: '5 Star',
  fourStarReviews: '4 Star',
  threeStarReviews: '3 Star',
  twoStarReviews: '2 Star',
  oneStarReviews: '1 Star',
} as any;

const ProductReview = ({ productDetail }: { productDetail: any }) => {
  const theme = useTheme();
  const { starReviewsCount, customerFeedback, avgRating, totalReviews } = productDetail;
  return (
    <Stack gap={5}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        rowGap={1}
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} md={3}>
          <Box sx={{ p: 2 }}>
            <Stack gap={1} alignItems="center">
              <Typography variant="subtitle2">Average Rating</Typography>
              <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
                {avgRating}
              </Typography>
              <Stack alignItems="center" sx={{ px: 2 }} gap={1}>
                <Rating size="small" value={avgRating} readOnly />
                <Typography variant="caption">{fShortenNumber(totalReviews)} reviews</Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ p: 2 }}>
            <Stack sx={{ gap: 1 }}>
              {Object.entries(starReviewsCount).map(([key, value]) => (
                <StarReviewCount
                  ratingType={key}
                  value={value}
                  totalReviews={totalReviews}
                  key={key}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Stack gap={3}>
        {customerFeedback?.map((review: Review) => (
          <CustomerReview review={review} key={review?.customerName} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductReview;

function StarReviewCount({
  ratingType,
  value,
  totalReviews,
}: {
  ratingType: string;
  value: any;
  totalReviews: number;
}) {
  return (
    <Stack direction="row" alignItems="center" sx={{ gap: 1 }}>
      <Typography variant="subtitle2" sx={{ fontSize: '12px' }}>
        {ratingLabels[ratingType]}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ borderRadius: '4px', height: '6px', width: '50%' }}
      />
      <Rating value={ratingLabels[ratingType][0]} readOnly />

      <Typography variant="subtitle2" sx={{ fontSize: '12px' }}>
        {fShortenNumber(value)}%
      </Typography>
    </Stack>
  );
}

function CustomerReview({ review }: { review: Review }) {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="flex-start" gap={5}>
      <Stack gap={1.5} alignItems="center">
        <Avatar
          alt={review?.customerName}
          src={review?.profilePicture}
          sx={{ height: 50, width: 50 }}
        />
      </Stack>
      <Stack gap={1} alignItems="flex-start">
        <Box>
          <Stack gap={1.5} alignItems="center" direction="row">
            <Typography variant="h6" align="center">
              {review?.customerName}
            </Typography>
            <Typography variant="caption" align="center" sx={{ fontSize: '12px' }}>
              {dayjs(review?.postDate).fromNow()}
            </Typography>
          </Stack>
          <Rating readOnly value={review?.rating} />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>
            {review?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.grey[500], fontSize: '12px' }}>
            {review?.description}
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" gap={2}>
          <Button
            size="small"
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <Iconify icon="solar:like-broken" sx={{ height: '0.85em', width: '0.85em' }} />
            }
          >
            Like
          </Button>
          <Button size="small" sx={{ color: varAlpha(theme.palette.error['mainChannel'], 0.7) }}>
            Reply
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
