import * as React from 'react';

import { TextField, Autocomplete } from '@mui/material';

type MultipleChipsSelect = {
  options: string[];
  label?: string;
  placeholder?: string;
};

// Custom Select component that allows the user to select multiple items in the form of chips that can be removed.
// To customize the field values, pass and array of strings or customize to your choice.

export default function MultipleChipSelect({
  label = 'Tags',
  placeholder = 'Tags',
  options,
}: MultipleChipsSelect) {
  const fixedOptions = [options[6]];
  const [tagName, setTagName] = React.useState<string[]>([...fixedOptions, options[2]]);

  return (
    <Autocomplete
      size="small"
      sx={{ '.MuiChip-root': { fontWeight: 600 } }}
      multiple
      options={options}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label={label} placeholder={placeholder} />}
      value={tagName}
      onChange={(event, newValue) => {
        setTagName([
          ...fixedOptions,
          ...newValue.filter((option) => !fixedOptions.includes(option)),
        ]);
      }}
    />
  );
}
