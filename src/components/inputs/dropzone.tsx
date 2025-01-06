import Dropzone from 'react-dropzone';
import React, { useRef, useState, useCallback } from 'react';

import {
  Box,
  Stack,
  useTheme,
  ImageList,
  Typography,
  IconButton,
  ImageListItem,
} from '@mui/material';

import { Iconify } from '../iconify';

type FileList = {
  id: number;
  src: string | ArrayBuffer | null | undefined;
  name: string;
};

// Custom file-input field with drag and drop funcitonality using the popular react-dropzone library
// For more info, visit "https://react-dropzone.js.org/"

const FileDropzone = () => {
  const theme = useTheme();
  const [images, setImages] = useState<FileList[]>([]);
  const imageListRef = useRef<HTMLDivElement | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImages((prevState) => [
          ...prevState,
          { id: index, name: file.name, src: e?.target?.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const removeFiles = (id: number) => {
    setImages((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Stack>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <Box
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e1e1e1',
              borderRadius: '16px',
              cursor: 'pointer',
            }}
            {...getRootProps()}
          >
            <Stack alignItems="center" gap={1}>
              <Box component="img" src="/assets/images/image_upload.png" />
              <input {...getInputProps()} accept="image/*" />
              <Typography variant="subtitle2">Drop or select</Typography>
              <Typography variant="caption">
                Drag &apos;n&apos; drop some files here, or click to{' '}
                <span style={{ color: 'blue', fontWeight: 500, textDecoration: 'underline' }}>
                  select
                </span>{' '}
                files
              </Typography>
            </Stack>
          </Box>
        )}
      </Dropzone>
      {images.length ? (
        <ImageList
          sx={{ mt: 1 }}
          cols={6}
          rowHeight={80}
          gap={2}
          ref={imageListRef}
          component="div"
        >
          {images.map((item: FileList, index: number) => (
            <ImageListItem
              key={item.name + index}
              sx={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #ececec',
                height: 80,
                position: 'relative',
              }}
            >
              <img
                src={item.src as string}
                alt={item.name}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
              <IconButton
                sx={{ position: 'absolute', top: '4px', right: '4px', p: 0 }}
                onClick={() => removeFiles(item.id)}
              >
                <Iconify icon="mingcute:close-circle-fill" color={theme.palette.error.main} />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>
      ) : null}
    </Stack>
  );
};

export default FileDropzone;
