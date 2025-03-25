import React, { useRef } from "react";
import styles from "./Slider_Cards.module.css";

interface SliderProps {
    cards: React.ReactNode[];
}

function CardSlider({cards}: SliderProps) {
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

    return (
        <div className={styles.slider_container}>
            {/* Left Scroll Button */}
            <button className={styles.nav_button + " " + styles.left_btn} onClick={scrollLeft}>
                &#10094;
            </button>

            {/* Scrollable Cards Container */}
            <div className={styles.scrollable_cards} ref={containerRef}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card_container}>
                        {card}
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            <button className={styles.nav_button + " " + styles.right_btn} onClick={scrollRight}>
                &#10095;
            </button>
        </div>
    );
}

export default CardSlider;
