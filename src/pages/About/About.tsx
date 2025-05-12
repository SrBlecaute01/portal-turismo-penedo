import { ConvertoVerticalImage, MainTitleImage } from "../../assets";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar";
import styles from "./About.module.css";

function About() {

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
              <h3>
                Participantes do projeto:
              </h3>
              <ul>
                <li>Aleksander Fellype Ferreira Santos</li>
                <li>Antonio Gabriel Ribeiro Oliveira</li>
                <li>Bruno Guilherme Martins Augusto</li>
                <li>Daniel David Lima Costa</li>
                <li>Eduardo José Ramos Melo</li>
                <li>Elaine Cristina Madeiro Tenorio De Moraes</li>
                <li>Emilly Cristhiny Silvino Teles</li>
                <li>Everson Vinicius Soares Do Nascimento</li>
                <li>Fabricio Roberto Fernandes Do Rosário </li>
                <li>Gabriel Ferreira Sarmento</li>
                <li>Gabryel Brandão Santos Andrade </li>
                <li>Jessica Dos Santos Ramos</li>
                <li>João Paulo Nicácio De Sousa</li>
                <li>José Arnaldo Santos Junior</li>
                <li>Josef Lucas Da Silva Siqueira </li>
                <li>Júlia Santos Ramos</li>
                <li>Liedson Danúbio Oliveira Leite</li>
                <li>Luan Silva Cardozo Dos Santos</li>
                <li>Lucas Araujo Lisboa</li>
                <li>Maria Fernanda Gomes Vieira</li>
                <li>Pedro Italo Ferreira Silva</li>
                <li>Ramon Saul Lobato Dos Santos</li>
                <li>Sancley Walter Dos Santos</li>
                <li>Vanessa Da Silva Maia</li>
                <li>Vilker Silva Santos</li>
                <li>Vitória Maria Dos Santos </li>
                <li>Yasmin Roberta De Lisboa Silva</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
