import {NavLink, To} from "react-router-dom";
import styles from './RouteCard.module.css'

interface RouteCardProps {
  title: string;
  to: To;
  image: string;
  days: number;
  description: string;
}

function RouteCard(props: RouteCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.image} alt={props.title}/>
      <div className={styles.cardContent}>
        <div className={styles.cardDays}>
          <span className={styles.cardDaysNumber}>{props.days}</span>
          <span className={styles.cardDaysLabel}>{props.days > 1 ? "dias" : "dia"}</span>
        </div>
        <div className={styles.cardText}>
          <NavLink to={props.to} className={styles.cardTitle}>{props.title}</NavLink>
          <div className={styles.cardDescription}>{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;