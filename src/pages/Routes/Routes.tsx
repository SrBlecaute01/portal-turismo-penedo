import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import styles from "./Routes.module.css";
import RouteCard from "./components/RouteCard";
import NumberInput from "../../components/Imput/NumberInput/NumberInput.tsx";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const routes = [
  {
    id: 1,
    title: "Roteiro para 1 dia em Penedo",
    to: "/rotas/1",
    days: 1,
    description: "Conheça o essencial de Penedo em apenas um dia, visitando os principais pontos históricos e culturais da cidade.",
    image: images[0].default
  },
  {
    id: 2,
    title: "Roteiro para 2 dias em Penedo",
    to: "/rotas/2",
    days: 2,
    description: "Aproveite um fim de semana em Penedo explorando o centro histórico e a cultura ribeirinha, com experiências à beira do Rio São Francisco.",
    image: images[1].default
  },
  {
    id: 3,
    title: "Roteiro para 3 dias em Penedo",
    to: "/rotas/3",
    days: 3,
    description: "Um final de semana prolongado para conhecer Penedo, combinando história, cultura ribeirinha e tradições locais.",
    image: images[2].default
  },
  {
    id: 5,
    title: "Roteiro para 5 dias em Penedo",
    to: "/rotas/5",
    days: 5,
    description: "Mergulhe na história e cultura de Penedo com tempo para explorar também as belezas naturais e a gastronomia local.",
    image: images[0].default
  },
  {
    id: 7,
    title: "Roteiro para 7 dias em Penedo",
    to: "/rotas/7",
    days: 7,
    description: "Uma semana completa para conhecer Penedo em profundidade, incluindo excursões para fazendas históricas e manifestações culturais.",
    image: images[1].default
  },
  {
    id: 10,
    title: "Roteiro para 10 dias em Penedo",
    to: "/rotas/10",
    days: 10,
    description: "Experiência completa que permite conhecer todos os aspectos de Penedo e região, com tempo para relaxar e aproveitar cada atração.",
    image: images[2].default
  }
];

function Routes() {
  const navigate = useNavigate();
  const maxInput = Math.max(...routes.map(route => route.days))
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleDaysChange = (days: number | null) => {
    const filtered = days !== null
      ? routes.filter((route) => route.days >= days)
      : routes;

    setFilteredRoutes(filtered);
  };

  const handleCardClick = (routeId: number) => {
    navigate(`/rotas/${routeId}`);
  };

  return (
    <div className={styles.rootContainer}>
      <Navbar/>
      <div className={styles.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        <div className={styles.carouselText}>Nossas rotas</div>
      </div>
      <div className={styles.numberContainer}>
        <p>Quantos dias você espera passar ?</p>
        <NumberInput
          min={1}
          max={maxInput}
          defaultValue={1}
          onValueChange={handleDaysChange}
        />
      </div>
      <div className={styles.routesContainer}>
        {filteredRoutes.map((route) => (
          <div key={route.id} className={styles.routesItems} onClick={() => handleCardClick(route.id)}>
            <RouteCard to={route.to} title={route.title} description={route.description} days={route.days} image={route.image}/>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Routes;
