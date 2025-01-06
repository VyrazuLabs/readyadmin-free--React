import type { Editor } from '@tiptap/react';

import { MenuItem, TextField, Typography } from '@mui/material';

// Component containing all the options for customizing your text headings.

const EditorHeadings = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <TextField
      select
      size="small"
      label="Headings"
      sx={{ '.MuiInputBase-root': { minWidth: 150 } }}
    >
      <MenuItem
        sx={{ '.MuiInputBase-root': { backgroundColor: 'transparent' } }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Typography variant="h1">Heading 1</Typography>
      </MenuItem>
      <MenuItem
        sx={{ '.MuiInputBase-root': { backgroundColor: 'transparent' } }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Typography variant="h2">Heading 2</Typography>
      </MenuItem>
      <MenuItem
        sx={{ '.MuiInputBase-root': { backgroundColor: 'transparent' } }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Typography variant="h3">Heading 3</Typography>
      </MenuItem>
      <MenuItem
        sx={{ '.MuiInputBase-root': { backgroundColor: 'transparent' } }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      >
        <Typography variant="h4">Heading 4</Typography>
      </MenuItem>
      <MenuItem
        sx={{ '.MuiInputBase-root': { backgroundColor: 'transparent' } }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
      >
        <Typography variant="h5">Heading 5</Typography>
      </MenuItem>
    </TextField>
  );
};
export default EditorHeadings;
