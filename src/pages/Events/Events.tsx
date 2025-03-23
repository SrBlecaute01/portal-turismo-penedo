import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import eventStyles from "./Events.module.css"; 

function Events() {
  return (
    <>
      <Navbar />
      <Loading />

      <div className={eventStyles.horizontal_cards}>
      <Card title="Bom Jesus dos Navegantes" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
      <Card title="Carnaval" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Penedo Motofest" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
      </div>
    </>
  );
}

export default Events;