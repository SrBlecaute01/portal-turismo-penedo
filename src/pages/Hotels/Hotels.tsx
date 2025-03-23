import Navbar from "../../components/Navbar";
import Card from "../../components/Card/";
import SliderCard from "../../components/Slider_Cards/";
import Carousel from "../../components/Carousel";
import styles from './Hotels.module.css';

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

function Hotels() {

  let description = "Lorem ipsum calypso voutom arumtac acadan çarcurt irfi cardeb oa poisqu andoche gonopa rámesin tobemo tempov oache gouom êsdef ériasv ouvo andop ropar ávoudi retal verop êsoapu rarmeu paladarfi carbemàvo tadee fazer oquequi zer ema tarmin hasau dade da pupun hacomca féeu vou naesta çãoda sdocas vouve rorexp anoes tádio vousa iránoi tecom osami goseu voume jogare uvou lano mangal dasgar çasvou nofor tedop resépio ede poisdo pointd oaçaí euque romediv ertir"
  let cards_to_scroll = [
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/3388EE/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/EE3388/FFFFFF/`}/>,
    <Card title="Hotel Exemplo Calipso" to="#" stars={5} imageUrl={`https://placehold.co/150x100/88EE33/FFFFFF/`}/>,
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
    <div className={styles.rootContainer}>
      <Navbar/>

      <div className={styles.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        <div className={styles.carouselText}>Principais Destinos</div>
      </div>

      <div className={styles.slider_cards}>
        <SliderCard cards={cards_to_scroll}/>
      </div>

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
      </div>
    </div>
  )
}

export default Hotels;