import Navbar from "../../components/Navbar";
import SliderCard from "../../components/SliderCards/index.ts";
import Carousel from "../../components/Carousel";
import styles from './Hotels.module.css';
import RatingCard from "../../components/RatingCard/RatingCard.tsx";
import Footer from "../../components/Footer/Footer.tsx";

const images = Object.values(import.meta.glob('../../assets/carousel/hotels/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

const hotelImages = Object.values(import.meta.glob('../../assets/hotels/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

const hoteis =[
  {
    id: 1,
    title: "Hotel Encantos de Penedo",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Situado na Rodovia AL-110, nº 195, bairro Santa Luzia, em Penedo (AL), o Hotel Encantos de Penedo é uma hospedagem que combina conforto e praticidade.<br/>
        Os quartos são amplos, higienizados e equipados com ar-condicionado, TV de tela plana, frigobar e banheiro privativo. O café da manhã é um dos destaques, sendo variado e incluindo tapiocas e sanduíches preparados na hora. <br/>
        O hotel oferece estacionamento gratuito, Wi-Fi gratuito e serviço de quarto, com opção de jantar no apartamento. O check-in é a partir das 14h e o check-out até às 12h. A localização estratégica permite fácil acesso a mercados, lojas e postos de gasolina. A equipe é conhecida pela cordialidade e prestatividade, tornando a estadia ainda mais agradável. Ideal para viajantes que buscam tranquilidade e boa localização em Penedo.
      </span>,
    image: hotelImages[0].default
  },
  {
    id: 2,
    title: "Pousada Toca do Vale",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Situada no Residencial Vale do São Francisco, nº 10, bairro Dom Constantino, em Penedo (AL), a Pousada e Restaurante Toca do Vale combina hospedagem acolhedora com uma experiência gastronômica regional.<br/>
        O restaurante funciona diariamente das 11h às 20h, oferecendo almoço e jantar com opções à la carte e self-service, destacando pratos típicos como galinha caipira. <br/>
        A pousada oferece acomodações equipadas com ar-condicionado e estacionamento próprio para maior comodidade dos hóspedes. O check-in é realizado a partir das 14h e o check-out até as 12h. Com ambiente familiar e atendimento atencioso, é uma excelente opção para quem deseja desfrutar da culinária local e de uma estadia confortável em Penedo.
      </span>,
    image: hotelImages[1].default
  },
  {
    id: 3,
    title: "Hotel O Laçador",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Situada na Rodovia Engenheiro Joaquim Gonçalves, nº 17, bairro Cohab, em Penedo (AL), a Pousada e Churrascaria O Laçador combina hospedagem acolhedora com uma experiência gastronômica regional<br/>
        O hotel oferece quartos bem decorados, equipados com ar-condicionado, TV via satélite, frigobar e banheiro privativo, estacionamento privativo gratuito, Wi-Fi gratuito em toda a propriedade e é pet friendly. Além disso, os hóspedes têm acesso gratuito a uma piscina localizada a 2 km do hotel. <br/>
        O check-in é a partir das 12h e o check-out até às 12h. Ideal para viajantes que buscam tranquilidade, boa localização e excelente custo-benefício em Penedo.
      </span>,
    image: hotelImages[2].default
  },
  {
    id: 4,
    title: "Hotel São Francisco",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Localizado em uma das áreas mais tradicionais e encantadoras da cidade, o Hotel São Francisco está situado na Av. Floriano Peixoto, 237 - Centro Histórico, Penedo(AL), 57200-000. A poucos passos dos principais pontos turísticos e com fácil acesso ao Rio São Francisco, o hotel oferece uma estadia acolhedora, ideal tanto para turistas quanto para viajantes a trabalho.<br/>
        As acomodações do Hotel São Francisco foram planejadas para garantir o máximo de conforto. Os quartos contam com ar-condicionado, Wi-Fi gratuito, e são decorados de forma simples, porém aconchegante, proporcionando um ambiente tranquilo e agradável para descansar.
      </span>,
    image: hotelImages[3].default
  },
  {
    id: 5,
    title: "Cellya's Pousada",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Situada na Rodovia Engenheiro Joaquim Gonçalves, nº 1115, em Penedo (AL), a Cellya's Pousada é uma excelente escolha para viajantes que buscam conforto e praticidade.<br/>
        As suítes são bem equipadas, contando com ar-condicionado, TV de tela plana com canais via satélite, frigobar, Wi-Fi de alta velocidade e chuveiro quente. A área de lazer inclui piscina, churrasqueira e mesa de sinuca, criando um ambiente ideal para momentos de descanso e convivência entre amigos, casais ou famílias.<br/>
        O café da manhã é servido diariamente das 6h20 às 9h30, oferecendo uma variedade de opções para atender a diferentes gostos. <br/>
        O check-in é a partir das 12h e o check-out até as 12h. Com uma estrutura simples e funcional, a Cellya's Pousada oferece uma estadia agradável para quem visita Penedo.
      </span>,
    image: hotelImages[4].default
  },
  {
    id: 6,
    title: "Pousada Colonial Penedo",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        A Pousada Colonial Penedo está localizada na Praça Doze de Abril, 21, Centro Histórico, em Penedo (AL), oferecendo uma experiência aconchegante e confortável para os visitantes que desejam explorar a charmosa cidade.<br/>
        A pousada dispõe de quartos equipados com ar-condicionado e privativo, com toalhas e roupa de cama fornecidas, além de um guarda-roupa para acomodar seus pertences e Wi-Fi gratuito em toda a área. Além disso, a pousada possui quartos adequados para famílias, tornando-a uma excelente opção para aqueles que viajam com crianças.<br/> 
        A estrutura também conta com restaurante e bar, onde é possível desfrutar de uma deliciosa refeição ou um bom drink em um ambiente descontraído. E a recepção da pousada funciona 24 horas por dia, sempre disposta a fornecer dicas sobre os melhores passeios e atividades na região.
      </span>,
    image: hotelImages[5].default
  },
  {
    id: 7,
    title: "Hotel Rochedo",
    to: "#",
    rating_value: undefined,
    description: 
      <span>
        Localizado na Rodovia Engenheiro Joaquim Gonçalves, nº 700, bairro Dom Constantino, em Penedo (AL), o Hotel Rochedo combina conforto e praticidade para seus hóspedes.<br/>
        Com 38 quartos bem equipados, oferece ar-condicionado, TV a cabo, frigobar, Wi-Fi gratuito e varanda. O café da manhã é servido diariamente, proporcionando uma variedade de opções para diferentes gostos. A área de lazer conta com piscina ao ar livre e terraço, ideal para momentos de relaxamento. <br/>
        O hotel dispõe de estacionamento privativo gratuito e recepção 24 horas, garantindo conveniência e segurança. Além disso, é pet friendly, permitindo a hospedagem de animais de estimação. Com uma localização estratégica, oferece fácil acesso aos principais pontos turísticos da cidade. O check-in é a partir das 14h e o check-out até as 12h. Ideal para viajantes que buscam uma estadia confortável e bem localizada em Penedo.
      </span>,
    image: hotelImages[6].default
  }
];

function Hotels() {

  /* Card "Array" for current placeholding */
  let cards_to_scroll = (hoteis.map(hotel => (
    <RatingCard
      text={hotel.title}
      image={{
        title: "Imagem do " + hotel.title,
        rating_value: Boolean(hotel.rating_value) ? hotel.rating_value : undefined,
        image: hotel.image
      }}
      to={hotel.to}
    />
  )));
 
  return (
    /* Hotel Container*/
    <div className={styles.hotelsContainer}>
      {/* Navbar component*/}
      <Navbar/>

      {/* Carousel component*/}
      <Carousel text = 'Principais Destinos' searchbar = {false} images={images.map(image => image.default)}/>

      {/* Main Content Container*/}
      <div className={styles.hotelsContent}>
        {/* New Slider code using Swiper component*/}
        <SliderCard text="Mais procurados" sorting = {false} cards={cards_to_scroll}/>

        {/* Card list with placeholder cards */}
        <div className={styles.cardsListContainer}>
          {hoteis.map((hotel) =>
            <div key ={hotel.id}>
              <RatingCard
                text={hotel.title}
                image={{
                  title: "Imagem do " + hotel.title,
                  image: hotel.image
                }}
                info={{
                  title: hotel.title,
                  description: hotel.description
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Hotels;