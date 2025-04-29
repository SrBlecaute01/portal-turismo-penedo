import { ConvertoVerticalImage, MainTitleImage } from "../../assets";
import Footer from "../../components/Footer/Footer";
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
              Penedo é uma das cidades mais antigas de Alagoas e do Brasil, localizada às margens do rio São Francisco. Sua origem remonta ao século XVI, quando foi inicialmente habitada por povos indígenas da etnia Tupinambá.
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
                    <h2>Centro Histórico de Penedo</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_2 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h2>Convento Santa Maria dos Anjos</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_3 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h2>Porto da Balsa de Penedo</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_4 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h2>Igreja São Gonçalo Garcia</h2>
                  </div>
                </div>
                <div className={styles.slide_widget_5 + " " + styles.slide_widget}>
                  <div className={styles.text_overlay}>
                    <h2>Rua Barão do Rio Branco</h2>
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
              Penedo é uma das cidades mais antigas de Alagoas e do Brasil, localizada às margens do rio São Francisco. Sua origem remonta ao século XVI, quando foi inicialmente habitada por povos indígenas da etnia Tupinambá. A partir de 1560, com a chegada dos portugueses, iniciou-se o processo de colonização. Em 1614, a cidade foi oficialmente fundada por forças militares portuguesas, lideradas por Belchior Dias Morais, com o objetivo de estabelecer um ponto estratégico em São Francisco. Devido à sua localização privilegiada, Penedo tornou-se um importante entreposto comercial e militar. Durante o século XVII, a cidade foi invadida e ocupada pelos holandeses por um curto período. Após sua retomada pelos portugueses, Penedo se consolidou como um centro urbano de destaque na região nordeste. No século XVIII, o município ganhou ainda mais importância com o crescimento do comércio fluvial e da produção de açúcar. A cidade foi elevada à categoria de vila em 1636 e à condição de cidade em 1842. Seu centro histórico é conhecido por sua arquitetura colonial bem preservada, com igrejas barrocas, sobrados e casarões, muitos dos quais construídos por ordens religiosas, como os franciscanos e carmelitas. Penedo teve papel relevante nas lutas pela independência do Brasil e mais tarde durante a República. Atualmente, a cidade é reconhecida como patrimônio histórico nacional pelo IPHAN e atrai turistas interessados em sua rica história, cultura e beleza natural.{" "}
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
      <Footer />
    </>
  );
}

export default Home;
