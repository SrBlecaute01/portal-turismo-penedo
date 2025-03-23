import Navbar from "../../components/Navbar";
import Card from "../../components/Card/";
<<<<<<< HEAD
import SliderCard from "../../components/Slider_Cards/";
import styles from './Hotels.module.css';

=======
import styles from './Hotels.module.css';
>>>>>>> develop

function Hotels() {

  let description = "Lorem ipsum calypso voutom arumtac acadan çarcurt irfi cardeb oa poisqu andoche gonopa rámesin tobemo tempov oache gouom êsdef ériasv ouvo andop ropar ávoudi retal verop êsoapu rarmeu paladarfi carbemàvo tadee fazer oquequi zer ema tarmin hasau dade da pupun hacomca féeu vou naesta çãoda sdocas vouve rorexp anoes tádio vousa iránoi tecom osami goseu voume jogare uvou lano mangal dasgar çasvou nofor tedop resépio ede poisdo pointd oaçaí euque romediv ertir"
  let cards_to_scroll = [
    <Card title="Hotel Exemplo Calipso" to="#" stars={4} imageUrl={`https://placehold.co/150x100/3388EE/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/EE3388/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={4} imageUrl={`https://placehold.co/150x100/88EE33/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/5533FF/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/FF5533/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/33FF55/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={4} imageUrl={`https://placehold.co/150x100/CC00FF/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={4} imageUrl={`https://placehold.co/150x100/FFCC00/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={4} imageUrl={`https://placehold.co/150x100/00FFCC/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={3} imageUrl={`https://placehold.co/150x100/0066FF/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={3} imageUrl={`https://placehold.co/150x100/FF0066/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={3} imageUrl={`https://placehold.co/150x100/66FF00/FFFFFF/`}/>,
  ];
  return (
    <>
      <Navbar/>
      Hello World
<<<<<<< HEAD
      <SliderCard cards={cards_to_scroll}/>

      <div className={styles.card_list}>
        <div className={styles.horizontal_cards}>
          <Card title="Hotel Exemplo Calipso" to="#" stars= {4.5} imageUrl="https://placehold.co/150x100/3388EE/FFFFFF/"/>
          <Card title="Hotel Exemplo Calipso" to="#" description={description} isExpanded={true}/>
        </div>
        <div className={styles.horizontal_cards}>
          <Card title="Hotel Exemplo Calipso" to="#" stars= {1} imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
          <Card title="Hotel Exemplo Calipso" to="#" description={description} isExpanded={true}/>
        </div>
        <div className={styles.horizontal_cards}>
          <Card title="Hotel Exemplo Calipso" to="#" stars= {3} imageUrl="https://placehold.co/150x100/88EE33/FFFFFF/"/>
          <Card title="Hotel Exemplo Calipso" to="#" description={description} isExpanded={true}/>
        </div>
=======
      <div className={styles.horizontal_cards}>
        <Card title="Hotel Exemplo Calipso" to="#" stars= {4.5} imageUrl="https://placehold.co/150x100/3388EE/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 3, 4)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/EE3388/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" date={new Date(2025, 14, 14)} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/FF55CC/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={1.1} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/CCFF55/666666/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={3} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/88EE33/FFFFFF/"/>
        <Card title="Evento Exemplo Lorem Ipsum Calipso" to="#" routeDay={5} description="Lorem Ipsum Calipso Voutom Arumtac Acadan Çarcurt Irfi Cardeb Oa" imageUrl="https://placehold.co/150x100/44FF88/FFFFFF/"/>
>>>>>>> develop
      </div>
    </>
  )
}

export default Hotels;