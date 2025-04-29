import Navbar from "../../components/Navbar";
import styles from "./RoutesDetails.module.css";
import Carousel from "../../components/Carousel";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";
import { useState, useEffect } from "react";
import DaysNavigation from "../../components/DaysNavigation/DaysNavigation";
import { daysData, routesData } from "./routesData"; 

const images = Object.values(import.meta.glob('../../assets/carousel/routes/*.{png,jpg,jpeg,svg}', { eager: true })) as { default: string }[];

interface Section {
  image: string;
  title: string;
  description: string;
  period?: "manhã" | "tarde" | "noite";
}

// Componente para exibir atividades de um período
const PeriodSection = ({ title, sections, startIndex = 0 }: { 
  title: string, 
  sections: Section[], 
  startIndex?: number 
}) => {
  if (sections.length === 0) return null;
  
  return (
    <div className={styles.period_section}>
      <h3 className={styles.period_title}>{title}</h3>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.info_section} ${(startIndex + index) % 2 === 0 ? styles.left_image : styles.right_image}`}
        >
          <div className={styles.image_container}>
            <img src={section.image} alt={section.title} />
          </div>
          <div className={styles.section_content}>
            <h3>{section.title}</h3>
            <p style={{ textAlign: "justify" }}>{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Routes = () => {
  const { id } = useParams();
  const paramId = Number(id);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // Encontrar o ID da rota válido mais próximo
  const validRouteIds = [3, 7, 10];
  const routeId = validRouteIds.find(validId => validId >= paramId) || validRouteIds[validRouteIds.length - 1];
  const routeData = routesData[routeId];

  // Resetar o índice do dia quando a rota mudar
  useEffect(() => {
    setCurrentDayIndex(0);
  }, [id]);

  const dayId = routeData.days[currentDayIndex];
  const day = daysData[dayId];
  
  // Agrupar atividades por período
  const morningActivities = day.sections.filter(section => section.period === "manhã");
  const afternoonActivities = day.sections.filter(section => section.period === "tarde");
  const eveningActivities = day.sections.filter(section => section.period === "noite");
  const otherActivities = day.sections.filter(section => !section.period);
  
  // Calcular índices para intercalar corretamente as imagens
  const morningStartIndex = 0;
  const afternoonStartIndex = morningActivities.length;
  const eveningStartIndex = afternoonStartIndex + afternoonActivities.length;
  const otherStartIndex = eveningStartIndex + eveningActivities.length;

  return (
    <>
      <Navbar />
      <div className={styles.rota_container}>
        <div className={styles.header_container}>
          <Carousel 
            images={images.map(image => image.default)} 
            text={routeData.title} 
          />
        </div>

        <div className={styles.content_section}>
          <div className={styles.main_content}>
            <p style={{ textAlign: "justify" }}>{routeData.description}</p>
          </div>
          
          <div className={styles.day_section}>
            <h2 className={styles.day_title}>{day.title}</h2>
            
            <PeriodSection title="Manhã" sections={morningActivities} startIndex={morningStartIndex} />
            <PeriodSection title="Tarde" sections={afternoonActivities} startIndex={afternoonStartIndex} />
            <PeriodSection title="Noite" sections={eveningActivities} startIndex={eveningStartIndex} />
            
            {otherActivities.length > 0 && 
              <PeriodSection title="Outras Atividades" sections={otherActivities} startIndex={otherStartIndex} />}

            <div className={styles.day_navigation}>
              <DaysNavigation 
                daysCount={routeData.days.length}
                currentDayIndex={currentDayIndex}
                onPreviousDay={() => setCurrentDayIndex(prev => Math.max(0, prev - 1))}
                onNextDay={() => setCurrentDayIndex(prev => Math.min(routeData.days.length - 1, prev + 1))}
                onSelectDay={setCurrentDayIndex}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Routes;
