import type {
  SelectChangeEvent} from '@mui/material';

import React from 'react';

import {
  Box,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListItemText,
  OutlinedInput,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
  icon: string;
}

interface SelectOptionIconProps {
  label?: string;
  placeholder?: string;
  options: Option[];
}

const SelectOptionIcon = ({
  options,
  label = 'Language Preference',
  placeholder = 'Language Preference',
}: SelectOptionIconProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option | undefined>(undefined);
  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(() => options?.find((lang) => lang?.value === value));
  };

  const renderFlag = (icon?: string) => (
    <Box
      component="img"
      alt={label}
      src={icon}
      sx={{ width: 26, height: 20, borderRadius: 0.5, objectFit: 'cover' }}
    />
  );

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>{label}</InputLabel>
        <Select
          placeholder={placeholder}
          fullWidth
          value={selectedOptions || ''}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={() => (
            <Stack direction="row" alignItems="center" gap={2}>
              {renderFlag(selectedOptions?.icon)}
              <ListItemText
                primary={selectedOptions?.label}
                sx={{ '.MuiTypography-root': { fontSize: '14px' } }}
              />
            </Stack>
          )}
        >
          {options.map((option) => (
            <MenuItem key={option.label} value={option.value} sx={{ gap: 2, p: 2 }}>
              {renderFlag(option.icon)}
              <ListItemText
                primary={option.label}
                sx={{ '.MuiTypography-root': { fontSize: '14px' } }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOptionIcon;
