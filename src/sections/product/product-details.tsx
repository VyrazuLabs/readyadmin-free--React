import { List, Stack, ListItem, Typography, ListItemIcon, ListItemText } from '@mui/material';

import { Iconify } from 'src/components/iconify';

type Detail = {
  title: string;
  features: string[];
};

const ProductDetails = ({ productDetail }: { productDetail: any }) => {
  const { details } = productDetail;
  return (
    <Stack gap={2}>
      {details?.map((detail: Detail) => (
        <Stack key={detail?.title}>
          <Typography variant="h4">{detail?.title}</Typography>
          <List
            dense
            disablePadding
            sx={{
              pl: 4,
            }}
          >
            {detail?.features?.map((feature: string) => (
              <ListItem key={feature} disablePadding sx={{ gap: 1 }}>
                <ListItemIcon
                  sx={{ minWidth: 'fit-content', p: 0.25, background: '#E7F4FC', borderRadius: 2 }}
                >
                  <Iconify
                    icon="si:check-fill"
                    sx={{ height: '1rem', width: '1rem' }}
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body2">{feature}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Stack>
      ))}
    </Stack>
  );
};

export default ProductDetails;
