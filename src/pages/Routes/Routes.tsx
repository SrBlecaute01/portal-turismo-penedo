import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import style from "./Routes.module.css";
import ExampleNumberField from "../../components/Imput/NumberInput/NumberInput.tsx";

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

function Routes() {
  return (
    <div className={style.rootContainer}>
      <Navbar/>
      <div className={style.carouselContainer}>
        <Carousel images={images.map(image => image.default)}/>
        <div className={style.carouselText}>Nossas rotas</div>
      </div>
      <div className={style.numberContainer}>
        <p>Quantos dias você espera passar ?</p>
        <ExampleNumberField/>
      </div>
    </div>
  )
}

export default Routes;