import type { SelectChangeEvent } from '@mui/material/Select';

import * as React from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';

type MultipleSelectCheckMarkProps = {
  options: string[];
  label?: string;
  placeholder?: string;
};

// Custom Select component that allows the user to select multiple items in the form of checkboxes.
// To customize the field values, pass and array of strings or customize to your choice.

export default function MultipleSelectCheckmarks({
  options,
  label = 'Color',
  placeholder = 'Color',
}: MultipleSelectCheckMarkProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel size="small">{label}</InputLabel>
        <Select
          size="small"
          placeholder={placeholder}
          multiple
          fullWidth
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
        >
          {options.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedOptions.includes(name)} size="small" />
              <ListItemText primary={name} sx={{ '.MuiTypography-root': { fontSize: '14px' } }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
