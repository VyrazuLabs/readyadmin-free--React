import './styles.scss';

import StarterKit from '@tiptap/starter-kit';
import ListItem from '@tiptap/extension-list-item';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import Subscript from '@tiptap/extension-subscript';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import Superscript from '@tiptap/extension-superscript';
import { useEditor, EditorContent } from '@tiptap/react';
import OrderedList from '@tiptap/extension-ordered-list';
import HorizontalRule from '@tiptap/extension-horizontal-rule';

import { Card, Stack, Divider } from '@mui/material';

import EditorHeadings from './text-editor-menu';
import EditorButtons from './edit-property-button';

// Custom text-editor component based on tiptap.
// For prerendering some mark-up, pass the component with a content props containing a string literal.
// E.g: `<h3>Hello World</h3>`

const TextEditor = ({ content = '' }: { content?: string }) => {
  const editor = useEditor({
    content,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      Underline,
      HorizontalRule,
      Subscript,
      Superscript,
      BulletList,
      OrderedList,
      ListItem,
    ],
  });

  return (
    <Card elevation={0}>
      <Stack direction="row" gap={1} sx={{ p: 1, flexWrap: 'wrap' }}>
        <EditorHeadings editor={editor} />
        <EditorButtons editor={editor} />
      </Stack>

      <Divider />
      <EditorContent editor={editor} />
    </Card>
  );
};
export default TextEditor;
