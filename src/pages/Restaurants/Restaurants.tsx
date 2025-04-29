import Navbar from "../../components/Navbar";
import SliderCard from "../../components/SliderCards";
import Carousel from "../../components/Carousel";
import styles from './Restaurants.module.css';
import Footer from "../../components/Footer/Footer.tsx";
import RatingCard from "../../components/RatingCard/RatingCard.tsx";

const restaurantImages = Object.values(import.meta.glob('../../assets/restaurants/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const restaurantImagesMap = new Map<string, string>(
  restaurantImages.map((module) => {
    const path = module.default;
    const parts = path.split('/');
    return [parts[parts.length - 1].split("-")[0].replace(/\D/g, ""), path];
  })
);

console.log(restaurantImagesMap);

const restaurantsCarousel = Object.values(import.meta.glob('../../assets/carousel/restaurants/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const restaurantsContent = [
  {
    id: 0,
    title: "Restaurante Daruma",
    to: "#",
    description: "Localizado na Av. Getúlio Vargas, 223 - Centro, Penedo - AL. Oferecem refeições como Sushi, coquetéis e pratos vegetarianos..."
  },
  {
    id: 1,
    title: "Restaurante Maurício de Nassau",
    to: "#",
    description: "Localizado na Rua Dom Jonas Batinga, 178 – Centro Histórico, Penedo - AL. Oferem Café da Manhã, Almoço, Jantar e Petiscos..."
  },
  {
    id: 2,
    title: "Restaurante do Júnior",
    to: "#",
    description: "Localizado no primeiro andar do Penedo Rio Shopping situado na Av. Comendador Peixoto, 127 - Centro Histórico, Penedo - AL. Oferecem Café da Manhã, Almoço, Jantar e Acompanhamentos..."
  },
  {
    id: 3,
    title: "Restaurante do Bode",
    to: "#",
    description: "Localizada na Rodovia Mário Freire Leahy – Senhor do Bonfim, Penedo - AL. Oferecem Café da Manhã, Almoço, Jantar e Acompanhamentos..."
  },
  {
    id: 4,
    title: "Yspeto’s Grill",
    to: "#",
    description: "Localizado na Praça Jácome Calheiros, 79 - Centro Histórico, Penedo - AL. Oferecem Almoço, Jantar Típico, Petisco, Churrasquinho, Batata Frita, Sushi, Hambúrgueres e Pizza..."
  },
  {
    id: 5,
    title: "Oushe Burguer",
    to: "#",
    description: "Localizado na Rua Tenente Eulógio Bispo, Rua da Upa, 45 - Santa Luzia, Penedo - AL. Oferecem Pizza, Hambúrgueres, Passaporte, Sobremesas e Acompanhamentos..."
  },
  {
    id: 6,
    title: "Restaurante Portal Grill",
    to: "#",
    description: "Localizado na Rod. Eng Joaquim Gonçalves – Dom Constantino, Penedo - AL. Oferecem Almoço, Jantar e Pizza..."
  },
  {
    id: 7,
    title: "Vila Dão Pedu",
    to: "#",
    description: "Localizado na Av. Comendador Peixoto – Centro Histórico, Penedo - AL. Oferecem Almoço, Jantar Típico, Petisco, Churrasquinho, Batata Frita, Sushi, Hambúrgueres e Pizza..."
  },
  {
    id: 8,
    title: "Restaurante Oratório",
    to: "#",
    description: "Localizado na Av. Alexandre Toledo, Orla de Penedo – Centro Histórico, Penedo - AL. Oferecem Almoço, Jantar e Petisco..."
  },
  {
    id: 9,
    title: "Espetinho da Colina",
    to: "#",
    description: "Localizado na Rod. Mário Freire Leahy, 333-683 - Sr. do Bonfim, Penedo - AL. Oferecem Churrasquinho, petiscos e arroz carreteiro..."
  },
  {
    id: 10,
    title: "Restaurante Forte da Rocheira",
    to: "#",
    description: "Localizado na Rua da Rocheira, 02, Centro Histórico, Penedo - AL. Oferecem Almoço e petisco..."
  },
  {
    id: 11,
    title: "Restaurante Prato Cheio",
    to: "#",
    description: "Localizado na Av. Wanderley - Santa Luzia, Penedo - AL. Oferecem da manhã, almoço e jantar..."
  },
  {
    id: 12,
    title: "Restaurante do Hotel São Francisco",
    to: "#",
    description: "Localizado na Av. Floriano Peixoto, 237, Centro Histórico, Penedo-AL. Oferecem Café da manhã, Almoço, Jantar e Lanches..."
  }
];


function Restaurants() {
  return (
    <div className={styles.restaurantsContainer}>
      <Navbar/>
      <Carousel
        text='Principais Destinos'
        images={restaurantsCarousel.map(image => image.default)}
      />
      <div className={styles.restaurantsContent}>
        <SliderCard
          text="Mais procurados"
          cards={restaurantsContent.map(restaurants => {
            return (
              <RatingCard
                text={restaurants.title.length <= 25 ? restaurants.title : restaurants.title.substring(0, 25) + "..."}
                to={restaurants.to}
                image={{
                  title: "Imagem do " + restaurants.title,
                  image: String(restaurantImagesMap.get(String(restaurants.id)))
                }}
              />
            )
          })}
        />
        <div className={styles.cardsContainer}>
          {restaurantsContent.map((restaurants) =>
            <div key={restaurants.id}>
              <RatingCard
                text={restaurants.title}
                image={{
                  title: "Imagem do " + restaurants.title,
                  image: String(restaurantImagesMap.get(String(restaurants.id)))
                }}
                info={{
                  title: restaurants.title,
                  description: restaurants.description
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
export default Restaurants;
