import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Stack, useTheme } from '@mui/material';

import { RouterLink } from 'src/routes/components';


// ----------------------------------------------------------------------

export function NotFoundView() {
  const theme = useTheme();
  return (
    <Grid container sx={{ flex: '1 1 auto', background: '#ECEBFB' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Stack gap={5} sx={{ width: '50%' }}>
            <Typography
              variant="h4"
              sx={{ fontSize: '8rem !important', fontWeight: 600, lineHeight: 1 }}
            >
              Oops!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: theme.palette.grey[500] }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>
            <Button
              component={RouterLink}
              href="/"
              size="large"
              variant="contained"
              sx={{ borderRadius: 3, p: 1.5, width: '70%' }}
            >
              Go to home
            </Button>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box component="img" src="/assets/illustrations/404.png" />
        </Grid>
      </Grid>
  );
}
