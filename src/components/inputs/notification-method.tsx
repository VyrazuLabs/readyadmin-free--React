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

import { _notification_methods } from 'src/_mock';

interface PreferredNotificationMethod {
  value: string;
  label: string;
}

const NotificationMethod = () => {
  const [notificationMethod, setNotificationMethod] = useState<
    PreferredNotificationMethod | undefined
  >();

  const handleChange = (event: SelectChangeEvent<typeof notificationMethod>) => {
    const {
      target: { value },
    } = event;
    setNotificationMethod(() =>
      _notification_methods?.find((notification) => notification?.value === value)
    );
  };
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>User Permissions/Access Levels</InputLabel>
        <Select
          placeholder="User Permissions/Access Levels"
          fullWidth
          value={notificationMethod || ''}
          onChange={handleChange}
          input={<OutlinedInput label="User Permissions/Access Levels" />}
          renderValue={() => notificationMethod?.label}
        >
          {_notification_methods.map((permission) => (
            <MenuItem value={permission.value} key={permission.value} sx={{ p: 2 }}>
              {permission.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default NotificationMethod;
