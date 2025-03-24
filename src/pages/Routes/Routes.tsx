import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import styles from "./Routes.module.css";
import RouteCard from "./components/RouteCard";
import NumberInput from "../../components/Imput/NumberInput/NumberInput.tsx";
import {useState} from "react";

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];
const routes = [
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 1,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[0].default
  },
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 3,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[1].default
  },
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 5,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[2].default
  },
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 7,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[0].default
  },
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 15,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[1].default
  },
  {
    title: "Lorem ipsum dolar sit amet sinet rilen out seed cityfron.",
    to: "#",
    days: 30,
    description: "Lorem ipsum dolar sit amet, rilen out seed cityfron.",
    image: images[2].default
  },
];

function Routes() {
  const maxInput = Math.max(...routes.map(route => route.days))
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleDaysChange = (days: number | null) => {
    const filtered = days !== null
      ? routes.filter((route) => route.days >= days)
      : routes;

    setFilteredRoutes(filtered);
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
          <div className={styles.routesItems}>
            <RouteCard to={route.to} title={route.title} description={route.description} days={route.days} image={route.image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Routes;
