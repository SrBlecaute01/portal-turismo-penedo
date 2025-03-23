import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

function Routes() {
  return (
    <>
      <Navbar/>
      <div>
        <Carousel images={images.map(image => image.default)}/>
      </div>
    </>
  )
}

export default Routes;