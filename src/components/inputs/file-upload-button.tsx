import type { SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

import React from 'react';

import { Button, styled } from '@mui/material';

// Custom file input button that is customizable.
// The component accepts label,icon and css properties as props for customizations.

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUploadButton = ({
  label,
  icon,
  sx,
}: {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  sx?: SxProps<Theme> | React.CSSProperties;
}) => (
  <Button component="label" role={undefined} tabIndex={-1} startIcon={icon} sx={{ ...sx }}>
    {label}
    <VisuallyHiddenInput
      type="file"
      onChange={(event: any) => console.log(event.target.files)}
      multiple
    />
  </Button>
);

export default FileUploadButton;
