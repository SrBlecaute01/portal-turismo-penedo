import styles from "./SliderCards.module.css";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import React from "react";

interface SliderProps {
  text?: string;
  sorting?: boolean;
  cards: React.ReactNode[];
}

function CardSlider({text, sorting, cards}: SliderProps) {
  return (
    <div className={styles.cards_wanted_container}>
      {Boolean(text) &&
          <div className={styles.top_info_container}>
            {/* Text over the slider */}
              <p className={styles.cards_wanted_text}>{text}</p>
            {/* Sorting options dropdown */}
            {sorting &&
                <div className={styles.sort_container}>
                    <label htmlFor="sort">Ordenar por</label>
                  {/* function for sorting not implemented yet*/}
                    <select id="sort" value={0}>
                        <option>Ordem alfabética</option>
                        <option>Mais avaliados</option>
                        <option>Menor preço</option>
                    </select>
                </div>
            }
          </div>
      }
      <Swiper
        loop={false}
        centeredSlides={false}
        slidesPerView={1}
        spaceBetween={10}
        lazyPreloadPrevNext={2}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 170
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 200
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 25
          },
        }}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card_container}>
              {card}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardSlider;
