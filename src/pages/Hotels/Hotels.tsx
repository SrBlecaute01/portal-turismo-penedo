import Navbar from "../../components/Navbar";
import SliderCard from "../../components/SliderCards/index.ts";
import Carousel from "../../components/Carousel";
import styles from './Hotels.module.css';
import SearchBar from "../../components/Searchbar/Searchbar.tsx";


import RatingCard from "../../components/RatingCard/RatingCard.tsx";

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

function Hotels() {

  const description = "Lorem ipsum calypso voutom arumtac acadan çarcurt irfi cardeb oa poisqu andoche gonopa rámesin tobemo tempov oache gouom êsdef ériasv ouvo andop ropar ávoudi retal verop êsoapu rarmeu paladarfi carbemàvo tadee fazer oquequi zer ema tarmin hasau dade da pupun hacomca féeu vou naesta çãoda sdocas vouve rorexp anoes tádio vousa iránoi tecom osami goseu voume jogare uvou lano mangal dasgar çasvou nofor tedop resépio ede poisdo pointd oaçaí euque romediv ertir"
  
  /* Card "Array" for current placeholding */
  let cards_to_scroll = (images.map(image => (
    <RatingCard
      text="Hotel Lorem Calipsum"
      image={{
        title: "Hotel Image",
        image: image.default
      }}
    />
  )));

  cards_to_scroll = cards_to_scroll.concat(cards_to_scroll); // Duplicate the array to make it scrollable
  cards_to_scroll = cards_to_scroll.concat(cards_to_scroll); // Duplicate the array to make it scrollable again
  /**/
  return (
    /* Hotel Container*/
    <div className={styles.hotelsContainer}>
      {/* Navbar component*/}
      <Navbar/>

      {/* Carousel component*/}
      <div className={styles.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        {/*LEMBRAR: colocar isso dentro do componente carrossel em si, e colocar a barra de pesquisa também*/}
        <div className={styles.carouselText}>Principais Destinos</div>
        <div className={styles.carouselSearchbar}>
          <SearchBar/>
        </div>
      </div>


      {/* Main Content Container*/}
      <div className={styles.hotelsContent}>
        {/* Old Slider code
        <div className={styles.slider_cards}>
          <SliderCard cards={cards_to_scroll}/>
        </div>
        */}
        {/* New Slider code using Swiper component*/}
        <SliderCard 
          text="Mais procurados"
          cards={cards_to_scroll}
        />
        {/* Old and responsive Cards List
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
        */}
        {/* New Card list with placeholder cards */}
        <div className={styles.cardsListContainer}>
          {images.map(image =>
            <RatingCard
              text="Hotel Lorem Calipsum"
              image={{
                title: "green iguana",
                image: image.default
              }}
              info={{
                title: "Hotel Lorem Calipsum",
                description: description
              }}
            />
          )}
        </div>
      </div>

    </div>
  )
}

export default Hotels;