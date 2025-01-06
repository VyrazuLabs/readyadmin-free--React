import React from 'react';

import { Box } from '@mui/material';

type PropType = {
  selected: boolean;
  onClick: () => void;
  imageSrc: string;
};

export const CarouselThumbnails: React.FC<PropType> = (props) => {
  const { selected, onClick, imageSrc } = props;

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <Box component="img" src={imageSrc} onClick={onClick} sx={{ borderRadius: '16px' }} />
    </div>
  );
};
