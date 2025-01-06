import { Card, Stack, Button, useTheme, TextField } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import FileUploadButton from 'src/components/inputs/file-upload-button';

const CreatePost = () => {
  const theme = useTheme();
  return (
    <Card sx={{ p: 2 }}>
      <Stack gap={2}>
        <TextField
          sx={{
            '.MuiInputBase-root': {
              background: theme.palette.grey[200],
            },
          }}
          id="outlined-textarea"
          placeholder="Share what you are thinking..."
          multiline
          fullWidth
          variant="outlined"
          rows={4}
        />
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={1}>
            <FileUploadButton icon={<Iconify icon="mynaui:image" />} label="Image/Video" />
            <FileUploadButton icon={<Iconify icon="mage:video" />} label="Streaming" />
          </Stack>
          <Button variant="contained">Post</Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CreatePost;
