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
            <h2>Sobre Nós</h2>

            <div className={styles.description_grid}>
              <p className={styles.description_text_left}>
                O Portal Turismo Penedo é um projeto acadêmico desenvolvido com o propósito de reunir, organizar e divulgar informações confiáveis sobre os principais atrativos turísticos da cidade de Penedo, em Alagoas. Nosso objetivo é facilitar o acesso a conteúdos relevantes para turistas e moradores, promovendo a cidade como um destino rico em história, cultura e hospitalidade.<br/>
                Através deste site, buscamos mapear e catalogar pontos turísticos, históricos, restaurantes, hotéis e serviços essenciais, oferecendo uma plataforma completa e acessível para quem deseja conhecer ou explorar melhor tudo o que Penedo tem a oferecer.<br/>
                Além de promover o turismo local, o projeto também pretende contribuir para o desenvolvimento econômico e social da cidade, valorizando os negócios locais e incentivando a divulgação de serviços que atendam tanto visitantes quanto a comunidade penedense.<br/>
                Seja bem-vindo ao Portal Turismo Penedo — sua fonte de informação confiável sobre a nossa cidade!<br/>
                {" "}
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
