import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../Routes/components/RouteCard";
import styles from "./Events.module.css"; 
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

function Events() {
  const [filteredRoutes] = useState(routes);
  return (
    <div className={styles.rootContainer}>
      <Navbar />
      <div className={styles.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        <div className={styles.carouselText}>Eventos</div>
      </div>

      <div className={styles.eventsContainer}>
        {filteredRoutes.map((route) => (
          <div className={styles.eventsItems}>
            <Card to={route.to} title={route.title} description={route.description} days={route.days} image={route.image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events;