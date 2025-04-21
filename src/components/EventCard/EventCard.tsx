import {NavLink, To} from "react-router-dom";
import styles from './EventCard.module.css'

interface EventCardProps {
  title: string;
  to: To;
  image: string;
  days: number;
  month: string;
  description: string;
}

function EventCard(props: EventCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={props.image} alt={props.title}/>
    <div className={styles.cardContent}>
        <div className={styles.cardMonths}>
            <span className={styles.cardDaysNumber}>{props.days}</span>
            <span className={styles.cardMonthsLabel}>{props.month.toUpperCase()}</span>
        </div>
        <div className={styles.cardText}>
          <NavLink to={props.to} className={styles.cardTitle}>{props.title}</NavLink>
          <div className={styles.cardDescription}>{props.description}</div>
        </div>
    </div>
    </div>
  );
}

export default EventCard;