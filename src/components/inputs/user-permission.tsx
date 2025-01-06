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

import { _permissions } from 'src/_mock';

type Permissions = {
  label: string;
  value: string;
};

const UserPermissions = () => {
  const [selectedUserPermissions, setSelectedUserPermission] = useState<Permissions | undefined>(
    undefined
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedUserPermissions>) => {
    const {
      target: { value },
    } = event;
    setSelectedUserPermission(() =>
      _permissions?.find((permission) => permission?.value === value)
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>User Permissions/Access Levels</InputLabel>
        <Select
          placeholder="User Permissions/Access Levels"
          fullWidth
          value={selectedUserPermissions || ''}
          onChange={handleChange}
          input={<OutlinedInput label="User Permissions/Access Levels" />}
          renderValue={() => selectedUserPermissions?.label}
        >
          {_permissions.map((permission) => (
            <MenuItem value={permission.value} key={permission.value} sx={{ p: 2 }}>
              {permission.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default UserPermissions;
