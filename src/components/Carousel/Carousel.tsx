import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import style from "./Carousel.module.css";
import {Autoplay, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface CarouselProps extends SwiperProps {
  images: string[];
}

const defaultProps: SwiperProps = {
  loop: true,
  slidesPerView: 1,
  className: style.swiper,
  modules: [Autoplay, Pagination],
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

function Carousel(props: CarouselProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <Swiper {...mergedProps}>
      {props.images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={style.swiperSlide}>
            <img alt={`slider-${index}`} src={image}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel;