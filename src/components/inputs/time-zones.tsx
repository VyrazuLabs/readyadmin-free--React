import type {
  SelectChangeEvent} from '@mui/material';

import React, { useState } from 'react';

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput
} from '@mui/material';

import { _timezones } from 'src/_mock';

type Timezone = {
  label: string;
  value: string;
};

const TimeZone = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<Timezone | undefined>(undefined);

  const handleChange = (event: SelectChangeEvent<typeof selectedTimeZone>) => {
    const {
      target: { value },
    } = event;
    setSelectedTimeZone(() => _timezones?.find((timezone) => timezone?.value === value));
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>Timezone</InputLabel>
        <Select
          placeholder="Timezone"
          fullWidth
          value={selectedTimeZone || ''}
          onChange={handleChange}
          input={<OutlinedInput label="Timezone" />}
          renderValue={() => selectedTimeZone?.value}
        >
          {_timezones.map((timezone) => (
            <MenuItem value={timezone.value} key={timezone.value} sx={{ p: 2 }}>
              {timezone.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default TimeZone;
