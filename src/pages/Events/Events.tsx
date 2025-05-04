import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Card from "../../components/EventCard";
import styles from "./Events.module.css"; 
import {useState} from "react";
import Footer from "../../components/Footer/Footer.tsx";

const images = Object.values(import.meta.glob('../../assets/carousel/events/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

const events = [
  {
    title: "Festa de Bom Jesus dos Navegantes",
    to: "#",
    month: "JAN",
    description: "A Festa de Bom Jesus dos Navegantes em Penedo, Alagoas, é uma celebração tradicional realizada em janeiro, unindo fé, cultura e festividades.",
    image: images[3].default,
    days: 9
  },
  {
    title: "Bloco do OVO",
    to: "#",
    month: "FEV",
    description: "O Ovo da Madrugada é uma agremiação carnavalesca de Penedo, Alagoas, fundada em 2009 por um grupo de amigos penedenses com o objetivo de resgatar a alegria dos carnavais de rua tradicionais da cidade.",
    image: images[0].default,
    days: 15
  },
  {
    title: "Lavagem do Beco da Preguiça",
    to: "#",
    month: "MAR",
    description: "A Lavagem do Beco da Preguiça é uma das mais tradicionais festividades de Penedo, Alagoas, sendo celebrada há mais de 40 anos.",
    image: images[6].default,
    days: 4
  },
  {
    title: "Moto Fest",
    to: "#",
    month: "MAR",
    description: "O Penedo Moto Fest é um dos eventos de motociclismo mais importantes do Baixo São Francisco, realizado anualmente na cidade histórica de Penedo, Alagoas.",
    image: images[7].default,
    days: 21
  },
  {
    title: "Fli Penedo - Festa Literária de Penedo",
    to: "#",
    month: "ABR",
    description: "A Festa Literária de Penedo (FliPenedo) é um evento cultural anual realizado em Penedo, que celebra a literatura e as artes.",
    image: images[2].default,
    days: 9
  },
  {
    title: "Desfile Cívico de 7 de Setembro",
    to: "#",
    month: "SET",
    description: "O desfile cívico de 7 de setembro em Penedo, Alagoas, é uma tradição marcante que celebra a Independência do Brasil, com ampla participação da comunidade.",
    image: images[1].default,
    days: 7
  },
  {
    title: "Trakto Show: Transformando Negócios e Sonhos",
    to: "#",
    month: "SET",
    description: "O Trakto Show é um evento que acontece em Penedo, Alagoas, e tem como foco o empreendedorismo, inovação e criatividade.",
    image: images[10].default,
    days: 23
  },
  {
    title: "Festival Gastronômico",
    to: "#",
    month: "OUT",
    description: "O festival gastronômico teve sua primeira edição em 2024 com o tema Festival de Penedo Sabor Jazz.",
    image: images[5].default,
    days: 1
  },
  {
    title: "Penedo Celebra Fé",
    to: "#",
    month: "OUT",
    description: "O Penedo Celebra a Fé é o maior evento da comunidade evangélica do Baixo São Francisco alagoano, realizado geralmente no mês de outubro.",
    image: images[8].default,
    days: 26
  },
  {
    title: "Festival de Cinema de Penedo.",
    to: "#",
    month: "NOV",
    description: "O Festival de Cinema de Penedo acontecia no início de janeiro, acompanhando a tradicional procissão de Bom Jesus dos Navegantes.",
    image: images[4].default,
    days: 25
  },
  {
    title: "Penedo Luz",
    to: "#",
    month: "DEZ",
    description: "O Penedo Luz é uma iniciativa da prefeitura de Penedo, em Alagoas, que transforma a cidade durante o Natal.",
    image: images[9].default,
    days: 8
  }
];

function Events() {
  const [filteredEvents] = useState(events);
  return (
    <div className={styles.rootContainer}>
      <Navbar/>
      <Carousel
        text="Eventos"
        images={images.map(image => image.default)}
      />
      <div className={styles.eventsContainer}>
        {filteredEvents.map((event) => (
          <div className={styles.eventsItems}>
            <Card to={event.to} title={event.title} description={event.description} days={event.days ?? 0} month={event.month} image={event.image}/>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Events;