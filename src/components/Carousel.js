import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react';

const Carousel = React.memo(({ pages, setting, setRef, setIdx }) => {
  const settings = {
    ...setting,
    afterChange: (current) => {
        setIdx && setIdx(current+1);
    },
};

  const sliderRef = useRef(null);
  

  useEffect(() => {
    setRef && setRef({
        slickPrev: () => {
            sliderRef.current.slickPrev();
        },
        slickNext: () => {
            sliderRef.current.slickNext();
        },
        slickPlay: () => {
            sliderRef.current.slickPlay();
        },
        slickPause: () => {
            sliderRef.current.slickPause();
        },
        currentSlide: () => {
            sliderRef.current?.slickCurrentSlide();
        },
    })
  }, [sliderRef])

  return (
    <Slider {...settings} ref={sliderRef}>
        {pages}
    </Slider>
  );
});

export default Carousel;
