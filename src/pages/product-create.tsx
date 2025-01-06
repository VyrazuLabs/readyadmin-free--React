import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Card,
  Grid,
  Stack,
  Radio,
  Button,
  Checkbox,
  FormGroup,
  Container,
  TextField,
  FormLabel,
  Typography,
  RadioGroup,
  FormControl,
  InputAdornment,
  FormControlLabel,
} from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import FileDropzone from 'src/components/inputs/dropzone';
import CustomSwitch from 'src/components/inputs/custom-switch';
import TextEditor from 'src/components/inputs/text-editor/text-editor';
import MultipleChipSelect from 'src/components/inputs/select-chip-multiple';
import MultipleSelectCheckmarks from 'src/components/inputs/select-checkmarks';

const ProductCreate = () => {
  const colors = ['Red', 'Blue', 'Yellow', 'Green', 'Pink', 'Orange', 'Purple'];
  const Tags = [
    'Technology',
    'Health & Fitness',
    'Travel',
    'Finance',
    'Education',
    'Food & Beverage',
    'Sports',
  ];

  return (
    <>
      <Helmet>
        <title> {`Product Create - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container maxWidth="md">
          <Stack gap={3}>
            <Typography variant="h4">Product create</Typography>
            <form>
              <Stack gap={3}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Details</Typography>
                  <Typography variant="body2">
                    Add your product name,desciption and much more!
                  </Typography>
                  <Stack gap={2} sx={{ mt: 4 }}>
                    <TextField size="small" label="Product Name" fullWidth />
                    <TextField
                      size="small"
                      label="Product Description"
                      fullWidth
                      multiline
                      minRows={4}
                    />
                    <Typography variant="subtitle1">Specifications</Typography>
                    <TextEditor />
                    <Typography variant="subtitle1">Images</Typography>
                    <FileDropzone />
                  </Stack>
                </Card>

                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Properties</Typography>
                  <Typography variant="body2">Additional feature about the product</Typography>
                  <Stack gap={2.5} sx={{ mt: 4 }}>
                    <Grid container columnSpacing={2} rowGap={2}>
                      <Grid item xs={12} md={6}>
                        <TextField label="Product Code" fullWidth size="small" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField label="Product SKU" fullWidth size="small" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField label="Quantity" fullWidth size="small" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <MultipleSelectCheckmarks options={colors} />
                      </Grid>
                      <Grid item xs={12}>
                        <MultipleChipSelect
                          options={Tags}
                          label="Category"
                          placeholder="Category"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl component="fieldset" variant="standard">
                          <FormLabel component="legend">Product Status</FormLabel>
                          <FormGroup row sx={{ px: 1 }}>
                            <FormControlLabel
                              control={<Checkbox defaultChecked />}
                              label="Active"
                            />
                            <FormControlLabel control={<Checkbox />} label="Disabled" />
                            <FormControlLabel
                              disabled
                              control={<Checkbox />}
                              label="Out of Stock"
                            />
                          </FormGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl component="fieldset" variant="standard">
                          <FormLabel component="legend">Reviews</FormLabel>
                          <RadioGroup row>
                            <FormControlLabel value="female" control={<Radio />} label="On" />
                            <FormControlLabel value="male" control={<Radio />} label="off" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Stack>
                </Card>

                <ProductPricing />

                <Stack direction="row" justifyContent="flex-end">
                  <Button variant="contained">Create Product</Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Container>
      </DashboardContent>
    </>
  );
};

export default ProductCreate;

function ProductPricing() {
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
