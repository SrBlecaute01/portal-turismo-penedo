import Navbar from "../../components/Navbar";
import "./Routes.css";

const rotaData = {
  title: "Rota 1",
  mainContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu. Quisque metus purus, eleifend ac porta eget, fringilla sed velit. Vivamus fringilla ligula tortor, ut laoreet turpis laoreet at. Maecenas dui felis, aliquam id nisl vel, tincidunt viverra est. Donec rhoncus efficitur consectetur. Aenean sit amet maximus purus. Vestibulum maximus varius sem, eu venenatis orci auctor eget. Pellentesque at tincidunt ipsum. Maecenas auctor tristique orci, sed sodales nisl scelerisque id. Duis vitae augue in purus accumsan euismod varius at dui.",
  sections: [
    {
      image: "igreja.jpg",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu."
    },
    {
      image: "rua-colorida.jpg",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim, leo eu hendrerit feugiat, risus ex placerat nunc, quis varius orci urna sed lectus. Sed vitae rutrum elit, non laoreet nunc. Pellentesque semper ut lacus ac fringilla. Integer sit amet lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec lobortis sem, eu tincidunt arcu."
    }
  ]
};

const Routes = () => {
  return (
    <>
      <Navbar />
      <div className="rota-container">
        <div className="header-image">
          <div className="title-overlay">
            <h1>{rotaData.title}</h1>
          </div>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="content-section">
          <div className="main-content">
            <p>{rotaData.mainContent}</p>
          </div>

          {rotaData.sections.map((section, index) => (
            <div
              key={index}
              className={`info-section ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
            >
              <div className="image-container">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="section-content">
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
