import Navbar from "../../components/Navbar";
import Card from "../../components/Card/";
import styles from './Hotels.module.css';

function Hotels() {
  let description = "Lorem ipsum calypso voutom arumtac acadan çarcurt irfi cardeb oa poisqu andoche gonopa rámesin tobemo tempov oache gouom êsdef ériasv ouvo andop ropar ávoudi retal verop êsoapu rarmeu paladarfi carbemàvo tadee fazer oquequi zer ema tarmin hasau dade da pupun hacomca féeu vou naesta çãoda sdocas vouve rorexp anoes tádio vousa iránoi tecom osami goseu voume jogare uvou lano mangal dasgar çasvou nofor tedop resépio ede poisdo pointd oaçaí euque romediv ertir"
  return (
    <>
      <Navbar/>
      Hello World

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
    </>
  )
}

export default Hotels;