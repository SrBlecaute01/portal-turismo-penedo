import Navbar from "../../components/Navbar";
import Card from "../../components/Card/";
import styles from './Hotels.module.css';

function Hotels() {
  return (
    <>
      <Navbar/>
      Hello World
      <div className={styles.horizontal_cards}>
        <Card title="Hotel Exemplo Calipso" to="#" stars= {4.5} imageUrl="https://placehold.co/150x100/3388EE/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={1.1} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/CCFF55/666666/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={3} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/88EE33/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={5} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/44FF88/FFFFFF/"/>
      </div>
    </>
  )
}

export default Hotels;