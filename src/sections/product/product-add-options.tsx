import React, { useState } from 'react';

import {
  Box,
  Radio,
  Stack,
  Button,
  useTheme,
  IconButton,
  RadioGroup,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

const productColor = ['pink', 'green', 'grey'];
const sizes = [
  {
    value: 'Small',
    label: 'Small',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Large',
    label: 'Large',
  },
  {
    value: 'Extra large',
    label: 'Extra large',
  },
  {
    value: 'XXL',
    label: 'XXL',
  },
];

const ProductAddOptions = () => (
  <Stack sx={{ gap: 3 }}>
    <ProductColorPicker />
    <ProductSizePicker />
    <ProductQuantity />
  </Stack>
);

export default ProductAddOptions;

function ProductColorPicker() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack gap={1}>
      <Typography variant="subtitle1">Choose a color</Typography>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ gap: 0.5 }}
      >
        {productColor?.map((color: string) => (
          <FormControlLabel
            key={color}
            value={color}
            control={
              <Radio
                size="medium"
                icon={<Box sx={{ background: color, borderRadius: 1, height: 30, width: 30 }} />}
                checkedIcon={
                  <Iconify
                    icon="typcn:tick"
                    sx={{
                      color: color !== 'pink' ? '#fff' : '#000',
                      borderRadius: 1,
                      background: color,
                      p: 0.5,
                      height: 30,
                      width: 30,
                    }}
                  />
                }
                sx={{
                  border: value === color ? `2px solid ${color}` : 'none',
                  borderRadius: 1.5,
                }}
              />
            }
            label=""
            sx={{
              m: 0,
              '.MuiRadio-root': {
                p: '3px',
              },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
}

function ProductSizePicker() {
  const theme = useTheme();
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack gap={1}>
      <Typography variant="subtitle1">Choose a size</Typography>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ gap: 0.5 }}
      >
        {sizes?.map((size: { label: string; value: string }) => (
          <FormControlLabel
            key={size.label}
            value={size.value}
            control={<Radio size="small" />}
            label={size.label}
            sx={{
              p: 1,
              m: 0,
              background:
                value === size.value
                  ? theme.palette.grey[300]
                  : varAlpha(theme.palette.secondary.lighterChannel, 0.3),
              borderRadius: 1.5,
              gap: 0.5,
              '.MuiRadio-root': {
                p: '0px',
              },
              '.MuiTypography-root': {
                fontSize: '12px',
                fontWeight: 500,
              },
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
}

function ProductQuantity() {
  const [producQuantity, setProductQuantity] = useState(1);
  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
      <Stack
        direction="row"
        alignItems="center"
        sx={{ border: '1px solid #e4e4e4', borderRadius: 3, p: 0.5 }}
        gap={0.5}
      >
        <IconButton
          disabled={producQuantity === 1}
          onClick={() => setProductQuantity((prev: number) => prev - 1)}
        >
          <Iconify icon="fluent:subtract-12-filled" sx={{ height: 15, width: 15 }} />
        </IconButton>
        <Typography variant="subtitle1" sx={{ width: '15px', fontSize: '14px' }}>
          {producQuantity}
        </Typography>
        <IconButton onClick={() => setProductQuantity((prev: number) => prev + 1)}>
          <Iconify icon="fluent:add-12-filled" sx={{ height: 15, width: 15 }} />
        </IconButton>
      </Stack>
      <Button
        variant="contained"
        startIcon={<Iconify icon="mynaui:cart" />}
        sx={{ borderRadius: 3, px: 2, py: 1, width: { xs: '70%', md: '50%' } }}
      >
        Add to Cart
      </Button>
    </Stack>
  );
}
