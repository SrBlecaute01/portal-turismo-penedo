import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import RatingCard from "../../components/RatingCard/RatingCard.tsx";
import styles from "./Tourism.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

const images = Object.values(import.meta.glob('../../assets/carousel/tourism/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam eros, sodales eget risus nec, " +
  "auctor laoreet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam eros, sodales " +
  "eget risus nec, auctor laoreet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam eros," +
  " sodales eget risus nec, auctor laoreet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum " +
  "quam eros, sodales eget risus nec, auctor laoreet sem."

function Tourism() {
  return (
    <div className={styles.tourismContainer}>
      <Navbar/>

      <div className={styles.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        <div className={styles.carouselText}>Principais Destinos</div>
      </div>

      <div className={styles.tourismContent}>
        <div className={styles.cardsWantedContainer}>
          <p className={styles.cardsWantedText}>Mais procurados</p>
          <Swiper
            loop={true}
            className={styles.cardsWantedCarousel}
            centeredSlides={true}
            slidesPerView={4}
            spaceBetween={25}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <RatingCard
                  text="Lorem Ipsum - Ipsum"
                  className={styles.cardsRating}
                  image={{
                    title: `${index}`,
                    image: image.default
                  }}
                />
              </SwiperSlide>
            ))}
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <RatingCard
                  text="Lorem Ipsum - Ipsum"
                  className={styles.cardsRating}
                  image={{
                    title: `${index}`,
                    image: image.default
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.cardsContainer}>
          {images.map(image =>
            <RatingCard
              text="Lorem Ipsum - Ipsum"
              image={{
                title: "green iguana",
                image: image.default
              }}
              info={{
                title: "Lorem Ipsum - Ipsum",
                description: lorem
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Tourism;