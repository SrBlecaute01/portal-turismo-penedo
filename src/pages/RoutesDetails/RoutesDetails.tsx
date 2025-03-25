import { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./RoutesDetails.module.css";

const rotaData = {
  id: 1,
  title: "Rota 1",
  mainContent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu. Quisque metus purus, eleifend ac porta eget, fringilla sed velit. Vivamus fringilla ligula tortor, ut laoreet turpis laoreet at. Maecenas dui felis, aliquam id nisl vel, tincidunt viverra est. Donec rhoncus efficitur consectetur. Aenean sit amet maximus purus. Vestibulum maximus varius sem, eu venenatis orci auctor eget. Pellentesque at tincidunt ipsum. Maecenas auctor tristique orci, sed sodales nisl scelerisque id. Duis vitae augue in purus accumsan euismod varius at dui.",
  sections: [
    {
      image: "src/assets/carousel/routes/slider-3.jpeg",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu.",
    },
    {
      image: "src/assets/carousel/routes/slider-1.jpeg",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu.",
    },
  ],
};

const Routes = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Navbar />
      <div className={styles.rota_container}>
        <div className={styles.header_image}>
          <div className={styles.title_overlay}>
            <h1>{rotaData.title}</h1>
          </div>
          <div className={styles.dots}>
            <span
              onClick={handleClick}
              className={isActive ? styles.active : styles.dot}
            ></span>
            <span
              onClick={handleClick}
              className={isActive ? styles.active : styles.dot}
            ></span>
            <span
              onClick={handleClick}
              className={isActive ? styles.active : styles.dot}
            ></span>
          </div>
        </div>

        <div className={styles.content_section}>
          <div className={styles.main_content}>
            <p>{rotaData.mainContent}</p>
          </div>

          {rotaData.sections.map((section, index) => (
            <div
              key={index}
              className={`${styles.info_section} ${
                index % 2 === 0 ? styles.left_image : styles.right_image
              }`}
            >
              <div className={styles.image_container}>
                <img src={section.image} alt={section.title} />
              </div>
              <div className={styles.section_content}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Routes;
