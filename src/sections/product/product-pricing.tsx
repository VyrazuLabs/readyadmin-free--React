import { useState } from 'react';

import {
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';

import CustomSwitch from 'src/components/inputs/custom-switch';

export default function ProductPricing() {
  const [taxIncluded, setTaxIncluded] = useState(false);
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6">Pricing</Typography>

      <Stack gap={2.5} sx={{ mt: 4 }}>
        <Grid container columnSpacing={2} rowGap={2}>
          <Grid item xs={12} md={6}>
            <TextField
              type="number"
              label="Regular Price"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              placeholder="0.00"
              defaultValue={54.12}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="number"
              label="Sale Price"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              placeholder="0.00"
              defaultValue={49.99}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <CustomSwitch
                  checked={taxIncluded}
                  onChange={(e) => setTaxIncluded(e.target.checked)}
                />
              }
              label={<Typography variant="body2">Price includes taxes.</Typography>}
              labelPlacement="start"
              sx={{ width: '100%', gap: 1, mx: 0, justifyContent: 'flex-end' }}
            />
          </Grid>
          {!taxIncluded && (
            <Grid item xs={12}>
              <TextField
                label="Tax %"
                placeholder="0.00"
                fullWidth
                size="small"
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
              />
            </Grid>
          )}
        </Grid>
      </Stack>
    </Card>
  );
}
