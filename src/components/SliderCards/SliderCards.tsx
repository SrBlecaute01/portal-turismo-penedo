import React, { useRef } from "react";
import styles from "./SliderCards.module.css";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

interface SliderProps {
    text?: string;
    cards: React.ReactNode[];
}

function CardSlider({text, cards}: SliderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    function scrollLeft() {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    }

    function scrollRight() {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    }


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
    return (
        <div className={styles.slider_container}>
            {/* Left Scroll Button */}
            <button className={styles.nav_button + " " + styles.left_btn} onClick={scrollLeft}>
                &#10094;
            </button>

            {/* Scrollable Cards Container */}
            <div className={styles.scrollable_cards} ref={containerRef}>
                {cards}
            </div>

            {/* Right Scroll Button */}
            <button className={styles.nav_button + " " + styles.right_btn} onClick={scrollRight}>
                &#10095;
            </button>
        </div>
    );
}

export default CardSlider;
