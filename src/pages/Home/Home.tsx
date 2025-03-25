import { ConvertoVerticalImage, MainTitleImage } from "../../assets";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";

function Home() {
  const carrosselOptions = {
    type: "loop",
    perMove: 1,
    focus: "center",
    gap: "1rem",
    height: 560,
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section>
          <div className={styles.main_section_header}>
            <img
              src={MainTitleImage}
              alt="Banner"
              className={styles.banner_img}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum quam eros, sodales eget risus nec, auctor laoreet sem.
              Curabitur a feugiat nibh, eget tincidunt tellus. Quisque tristique
              lobortis dui, efficitur aliquet metus fermentum non. Ut at lectus
              vitae erat vestibulum congue vel id sapien. Cras consectetur eget
              mauris et maximus. Phasellus bla
            </p>
          </div>
        </section>

        <section>
          <div className={styles.main_section_highlight + " home_slide_grid_container"}>
            <Splide
              className={styles.slide_grid_container}
              options={carrosselOptions}
            >
              <SplideSlide className={styles.splide__slide}>
                <div className={styles.slide_widget_1 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h3>LOREM IPSUM</h3>
                    <h2>LOREM IPSUM DOLOR</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_2 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h3>LOREM IPSUM</h3>
                    <h2>LOREM IPSUM DOLOR</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_3 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h3>LOREM IPSUM</h3>
                    <h2>LOREM IPSUM DOLOR</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_4 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h3>LOREM IPSUM</h3>
                    <h2>LOREM IPSUM DOLOR</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_5 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h3>LOREM IPSUM</h3>
                    <h2>LOREM IPSUM DOLOR</h2>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <section className={styles.description_content}>
          <div className={styles.penedo_description_container}>
            <h2>Vem conhecer Penedo</h2>

            <div className={styles.description_grid}>
              <p className={styles.description_text_left}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam eros, sodales eget risus nec, auctor laoreet
                sem. Curabitur a feugiat nibh, eget tincidunt tellus. Quisque
                tristique lobortis dui, efficitur aliquet metus fermentum non.
                Ut at lectus vitae erat vestibulum congue vel id sapien. Cras
                consectetur eget mauris et maximus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum quam eros, sodales eget
                risus nec, auctor laoreet sem. Curabitur a feugiat nibh, eget
                tincidunt tellus. Quisque tristique lobortis dui, efficitur
                aliquet metus fermentum non. Ut at lectus vitae erat vestibulum
                congue vel id sapien. Cras consectetur eget mauris et maximus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam eros, sodales eget risus nec, auctor laoreet
                sem. Curabitur a feugiat nibh, eget tincidunt tellus. Quisque
                tristique lobortis dui, efficitur aliquet metus fermentum non.
                Ut at lectus vitae erat vestibulum congue vel id sapien. Cras
                consectetur eget mauris et maximus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum quam eros, sodales eget
                risus nec, auctor laoreet sem. Curabitur a feugiat nibh, eget
                tincidunt tellus. Quisque tristique lobortis dui, efficitur
                aliquet metus fermentum non. Ut at lectus vitae erat vestibulum
                congue vel id sapien. Cras consectetur eget mauris et maximus
                fermentum non. Ut at lectus vitae erat vestibulum congue vel id
                sapien. Cras conqe.{" "}
              </p>
              <img
                src={ConvertoVerticalImage}
                alt="Penedo"
                className={styles.description_image_right}
              />
            </div>
            <div className={styles.description_grid}>
              <img
                src={ConvertoVerticalImage}
                alt="Penedo"
                className={styles.description_image_left}
              />
              <p className={styles.description_text_right}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam eros, sodales eget risus nec, auctor laoreet
                sem. Curabitur a feugiat nibh, eget tincidunt tellus. Quisque
                tristique lobortis dui, efficitur aliquet metus fermentum non.
                Ut at lectus vitae erat vestibulum congue vel id sapien. Cras
                consectetur eget mauris et maximus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum quam eros, sodales eget
                risus nec, auctor laoreet sem. Curabitur a feugiat nibh, eget
                tincidunt tellus. Quisque tristique lobortis dui, efficitur
                aliquet metus fermentum non. Ut at lectus vitae erat vestibulum
                congue vel id sapien. Cras consectetur eget mauris et maximus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum quam eros, sodales eget risus nec, auctor laoreet
                sem. Curabitur a feugiat nibh, eget tincidunt tellus. Quisque
                tristique lobortis dui, efficitur aliquet metus fermentum non.
                Ut at lectus vitae erat vestibulum congue vel id sapien. Cras
                consectetur eget mauris et maximus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vestibulum quam eros, sodales eget
                risus nec, auctor laoreet sem. Curabitur a feugiat nibh, eget
                tincidunt tellus. Quisque tristique lobortis dui, efficitur
                aliquet metus fermentum non. Ut at lectus vitae erat vestibulum
                congue vel id sapien. Cras consectetur eget mauris et maximus
                fermentum non. Ut at lectus vitae erat vestibulum congue vel id
                sapien. Cras conqe.{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
