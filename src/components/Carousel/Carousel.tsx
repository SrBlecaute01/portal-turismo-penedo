import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import styles from "./Carousel.module.css";
import {Autoplay, Pagination} from "swiper/modules";
import Searchbar from "../Searchbar/Searchbar";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface CarouselProps extends SwiperProps {
  text?: string;
  images: string[];
}

const defaultProps: SwiperProps = {
  loop: true,
  slidesPerView: 1,
  className: styles.swiper,
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
    /* Carousel component*/
    <div className={styles.carouselContainer}>
      {/* Swiper Carousel */}
      <Swiper {...mergedProps}>
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.swiperSlide}>
              <img alt={`slider-${index}`} src={image}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Carousel Text */}
      {Boolean(props.text) &&
        <div className={styles.carouselText}>{props.text}</div>
      }
      {/* Search bar */}
      <div className={styles.carouselSearchbar}>
        <Searchbar/>
      </div>
    </div>
  )
}

export default Carousel;