import styles from "./SliderCards.module.css";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

interface SliderProps {
    text?: string;
    cards: React.ReactNode[];
}

function CardSlider({text, cards}: SliderProps) {

    return(
        <div className={styles.cardsWantedContainer}>
            {Boolean(text) &&
                <p className={styles.cardsWantedText}>{text}</p>
            }
            <Swiper
                loop={false}
                className={styles.cardsWantedCarousel}
                centeredSlides={false}
                slidesPerView={4}
                spaceBetween={25}
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
