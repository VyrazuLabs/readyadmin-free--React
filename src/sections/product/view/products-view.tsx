import { useState } from 'react';

import { TabPanel, TabContext } from '@mui/lab';
import {
  Tab,
  Card,
  Chip,
  Grid,
  Tabs,
  Stack,
  Button,
  useTheme,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import { fShortenNumber } from 'src/utils/format-number';

import { sampleProductDetails } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import Carousel from 'src/components/carousel/carousel';

import ProductReview from '../product-review';
import ProductDetails from '../product-details';
import ProductAddOptions from '../product-add-options';

export function ProductsView() {
  const theme = useTheme();
  const [productDetail, setProductDetail] = useState(sampleProductDetails);
  const [tabValue, setTabValue] = useState<string>('description');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <DashboardContent>
      <Container>
        <Typography variant="h4">Product details</Typography>
        <Grid container justifyContent="space-between" columnSpacing={1} rowGap={1} sx={{ my: 3 }}>
          <Grid item xs={12} md={6}>
            <Carousel slides={productDetail?.productImages} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap={1.5} sx={{ p: 2 }}>
              <Stack gap={1.5} direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h4">{productDetail?.productName}</Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Button
                    startIcon={<Iconify icon="mdi:heart-outline" />}
                    color="error"
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      background: theme.palette.error.lighter,
                    }}
                  >
                    109
                  </Button>
                  <IconButton color="primary" sx={{ borderRadius: 1 }}>
                    <Iconify icon="material-symbols:bookmark-outline" color="primary.darker" />
                  </IconButton>
                  <IconButton color="primary" sx={{ borderRadius: 1 }}>
                    <Iconify icon="solar:share-linear" color="primary.darker" />
                  </IconButton>
                </Stack>
              </Stack>
              <Typography variant="subtitle2" sx={{ color: theme.palette.grey[500] }}>
                {productDetail?.description}
              </Typography>
              <Stack direction="row" alignItems="center" gap={3} flexWrap="wrap">
                <Stack>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: '2.5rem !important', color: theme.palette.primary.main }}
                  >
                    {productDetail?.discountPrice}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: 'line-through',
                      fontSize: '1.5rem',
                      color: theme.palette.grey[500],
                    }}
                  >
                    {productDetail?.price}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Chip
                    icon={
                      <Iconify icon="mingcute:star-line" sx={{ height: '1rem', width: '1rem' }} />
                    }
                    label={productDetail?.avgRating}
                    color="warning"
                    sx={{ fontWeight: 700, p: 1 }}
                  />
                  <Chip
                    icon={
                      <Iconify icon="tabler:message-2" sx={{ height: '1rem', width: '1rem' }} />
                    }
                    label={fShortenNumber(productDetail?.totalReviews)}
                    color="primary"
                    sx={{ fontWeight: 700, p: 1 }}
                  />
                </Stack>
              </Stack>

              <ProductAddOptions />
            </Stack>
          </Grid>
        </Grid>

        <Card sx={{ p: 2 }}>
          <TabContext value={tabValue}>
            <Tabs onChange={handleChange} value={tabValue}>
              <Tab label="Description" value="description" />
              <Tab label={`Reviews (${productDetail?.customerFeedback?.length})`} value="reviews" />
            </Tabs>
            <TabPanel value="description">
              <ProductDetails productDetail={productDetail} />
            </TabPanel>
            <TabPanel value="reviews">
              <ProductReview productDetail={productDetail} />
            </TabPanel>
          </TabContext>
        </Card>
      </Container>
    </DashboardContent>
  );
}
