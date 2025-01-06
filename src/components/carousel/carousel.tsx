/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselThumbnails } from './carousel-thumbnails';
import { CarouselPagination, useSelectedSnapDisplay } from './carousel-pagination';
import { NextButton, PrevButton, usePrevNextButtons } from './carousel-buttons';
import './styles.css';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaMainApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaMainApi);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((value, index) => (
            <div className="embla__slide" key={index}>
              <Box
                component="img"
                src={value}
                sx={{
                  borderRadius: '24px',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  aspectRatio: '1/1',
                }}
              />
            </div>
          ))}
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <CarouselPagination selectedSnap={selectedSnap} snapCount={snapCount} />
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((value, index) => (
              <CarouselThumbnails
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imageSrc={value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
