/* eslint-disable */
import type { Editor } from '@tiptap/react';

import { Button, Tooltip, useTheme, ButtonGroup } from '@mui/material';

import { Iconify } from 'src/components/iconify';

// Conatins all customization options for your mark-up.
// To add your own, refer to "https://tiptap.dev/docs"

const EditorButtons = ({ editor }: { editor: Editor | null }) => {
  const theme = useTheme();
  if (!editor) return;
  return (
    <>
      <ButtonGroup
        variant="outlined"
        size="small"
        sx={{
          '.MuiButtonBase-root': {
            '& svg': { height: '1rem', width: '1rem' },
          },
        }}
      >
        <Tooltip title="Bold">
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            sx={{
              background: editor.isActive('bold') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('bold') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="mingcute:bold-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Italic">
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            sx={{
              background: editor.isActive('italic') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('italic') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="mingcute:italic-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Underline">
          <Button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            sx={{
              background: editor.isActive('underline') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('underline') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="mingcute:underline-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Strike-through">
          <Button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            sx={{
              background: editor.isActive('strike') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('strike') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="mingcute:strikethrough-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Highlight">
          <Button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            sx={{
              background: editor.isActive('highlight') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('highlight') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="cil:highlighter" />
          </Button>
        </Tooltip>
        <Tooltip title="Code-block">
          <Button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            sx={{
              background: editor.isActive('codeBlock') ? theme.palette.primary.dark : 'transparent',
              color: editor.isActive('codeBlock') ? '#fff' : theme.palette.text.disabledChannel,
              '&:hover': { color: theme.palette.primary.dark },
            }}
          >
            <Iconify icon="mingcute:code-line" />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        size="small"
        sx={{
          '.MuiButtonBase-root': {
            '& svg': { height: '1rem', width: '1rem' },
          },
        }}
      >
        <Tooltip title="Align left">
          <Button onClick={() => editor.chain().focus().setTextAlign('left').run()}>
            <Iconify icon="mingcute:align-left-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Align center">
          <Button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
            <Iconify icon="mingcute:align-center-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Justify">
          <Button onClick={() => editor.chain().focus().setTextAlign('right').run()}>
            <Iconify icon="mingcute:align-justify-line" />
          </Button>
        </Tooltip>
        <Tooltip title="Align right">
          <Button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
            <Iconify icon="mingcute:align-right-line" />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        size="small"
        sx={{
          '.MuiButtonBase-root': {
            '& svg': { height: '1rem', width: '1rem' },
          },
        }}
      >
        <Tooltip title="Bullet List">
          <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <Iconify icon="fluent:text-bullet-list-tree-16-filled" />
          </Button>
        </Tooltip>
        <Tooltip title="Numbered List">
          <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <Iconify icon="heroicons:numbered-list" />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <ButtonGroup
        variant="outlined"
        size="small"
        sx={{
          '.MuiButtonBase-root': {
            '& svg': { height: '1rem', width: '1rem' },
          },
        }}
      >
        <Tooltip title="Undo">
          <span>
            <Button
              sx={{ height: '100%' }}
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Iconify icon="material-symbols:undo-rounded" />
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="Redo">
          <span>
            <Button
              sx={{ height: '100%' }}
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <Iconify icon="material-symbols:redo-rounded" />
            </Button>
          </span>
        </Tooltip>
      </ButtonGroup>
    </>
  );
};

export default EditorButtons;
