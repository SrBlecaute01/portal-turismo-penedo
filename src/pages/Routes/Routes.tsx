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
    title: "Roteiro para 3 dias em Penedo",
    to: "/rotas/3",
    days: 3,
    description: "Explore monumentos históricos, navegue pelas águas do Velho Chico e mergulhe nas tradições e sabores da cultura local.",
    image: images[0].default
  },
  {
    id: 2,
    title: "Roteiro para 7 dias em Penedo",
    to: "/rotas/7",
    days: 7,
    description: "Entre igrejas históricas, natureza exuberante e sabores regionais, descubra a cidade que respira tradição e acolhimento.",
    image: images[1].default
  },
  {
    id: 3,
    title: "Roteiro para 10 dias em Penedo",
    to: "/rotas/10",
    days: 10,
    description: "Mergulhe em séculos de história, descubra paisagens deslumbrantes e saboreie a autenticidade da cultura ribeirinha.",
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
      <Carousel
        text="Nossas rotas"
        images={images.map(image => image.default)}
      />
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
