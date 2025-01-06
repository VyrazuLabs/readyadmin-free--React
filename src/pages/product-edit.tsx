import { Helmet } from 'react-helmet-async';

import {
  Card,
  Grid,
  Stack,
  Radio,
  Button,
  Checkbox,
  Container,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';

import { CONFIG } from 'src/config-global';
import { sampleProductDetails } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import FileDropzone from 'src/components/inputs/dropzone';
import TextEditor from 'src/components/inputs/text-editor/text-editor';
import MultipleChipSelect from 'src/components/inputs/select-chip-multiple';
import MultipleSelectCheckmarks from 'src/components/inputs/select-checkmarks';

import ProductPricing from 'src/sections/product/product-pricing';

const ProductEdit = () => {
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
        <title> {`Product Edit - ${CONFIG.appName}`}</title>
      </Helmet>
      <DashboardContent>
        <Container maxWidth="md">
          <Stack gap={3}>
            <Typography variant="h4">Product Edit</Typography>
            <form>
              <Stack gap={3}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Details</Typography>
                  <Typography variant="body2">
                    Add your product name,desciption and much more!
                  </Typography>
                  <Stack gap={2} sx={{ mt: 4 }}>
                    <TextField
                      size="small"
                      label="Product Name"
                      fullWidth
                      defaultValue={sampleProductDetails.productName}
                    />
                    <TextField
                      size="small"
                      label="Product Description"
                      fullWidth
                      multiline
                      minRows={4}
                      defaultValue={sampleProductDetails.description}
                    />
                    <Typography variant="subtitle1">Specifications</Typography>
                    <TextEditor
                      content={`<h3>Specifications</h3>
                                <ul>
                                    <li><strong>Material:</strong> Genuine Leather</li>
                                    <li><strong>Insole Type:</strong> Memory Foam</li>
                                    <li><strong>Outsole:</strong> Rubber</li>
                                    <li><strong>Closure:</strong> Slip-on</li>
                                    <li><strong>Heel Height:</strong> 1 inch</li>
                                    <li><strong>Available Sizes:</strong> 7, 8, 9, 10, 11</li>
                                    <li><strong>Available Colors:</strong> Brown, Black, Tan</li>
                                    <li><strong>Weight:</strong> 0.6 kg (per pair)</li>
                                    <li><strong>Care Instructions:</strong> Wipe with a damp cloth, avoid direct sunlight</li>
                                    <li><strong>Country of Origin:</strong> Italy</li>
                                </ul>

                            <h3>Color Variations</h3>
                            <ul>
                                <li><strong>Brown:</strong> Classic rich brown leather finish for versatile styling.</li>
                                <li><strong>Black:</strong> Sleek and timeless black leather, perfect for formal occasions.</li>
                                <li><strong>Tan:</strong> Light tan color, ideal for casual, everyday wear.</li>
                            </ul>

                            <h3>Size Variations</h3>
                            <ul>
                                <li><strong>Size 7:</strong> US Men's 7, EUR 40</li>
                                <li><strong>Size 8:</strong> US Men's 8, EUR 41</li>
                                <li><strong>Size 9:</strong> US Men's 9, EUR 42</li>
                                <li><strong>Size 10:</strong> US Men's 10, EUR 43</li>
                                <li><strong>Size 11:</strong> US Men's 11, EUR 44</li>
                            </ul>`}
                    />
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
                        <TextField
                          label="Product Code"
                          fullWidth
                          size="small"
                          defaultValue={sampleProductDetails?.product_code}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Product SKU"
                          fullWidth
                          size="small"
                          defaultValue={sampleProductDetails?.product_sku}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField label="Quantity" fullWidth size="small" defaultValue={42} />
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

export default ProductEdit;
