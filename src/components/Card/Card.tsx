import {NavLink, To} from "react-router-dom";
import styles from './Card.module.css';

<<<<<<< HEAD

=======
>>>>>>> develop
interface CardProps {
  title: string;
  to: To;
  stars?: number; 
  imageUrl?: string;
  date?: Date;
  routeDay?: number;
  description?: string;
<<<<<<< HEAD
  isExpanded?: boolean;
}

let monthNamesAbbr: string[] = ["jan", "fev", "mar",
  "abr", "maio", "jun", 
  "jul", "ago", "set",
  "out", "nov", "dez"];

function Card({title, to, stars, imageUrl, date, routeDay, description, isExpanded}: CardProps) {
  let dayNumber: string = "";
  let monthNumber: number = 1;
  /* let monthNames = ["Janeiro", "Fevereiro", "Março", 
    "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"];
  */
  
=======
}

function Card({title, to, stars, imageUrl, date, routeDay, description}: CardProps) {
  let dayNumber: string = "";
  let monthNumber: number = 1;
  let monthNamesAbbr: string[] = [];

>>>>>>> develop
  if (date) {
    dayNumber = date.getDate().toString();
    monthNumber = date.getMonth();
    if (monthNumber < 1 || monthNumber > 12) {
      console.error("Invalid month number: " + monthNumber);
      monthNumber = 1;
    }
<<<<<<< HEAD
    
  }
  return (
    <div className={Boolean(isExpanded) ? styles.expanded_card : styles.card}>
      
=======
    monthNamesAbbr = ["jan", "fev", "mar", "abr", "maio", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  }

  return (
    <div className={styles.card}>
>>>>>>> develop
      {Boolean(imageUrl) &&
        <img className={styles.card_img} src={imageUrl} alt={title}/>}
      
      <div className={styles.card_content}>
        {Boolean(date) && (
          <div className={styles.card_date}>
            <span>{monthNamesAbbr[(monthNumber-1)]}</span>
            <span className={styles.dayNumber}>{dayNumber}</span>
          </div>
        )}
        {Boolean(routeDay) && (
          //style errado, criar o certo depois
          <div className={styles.card_routeDay}>
            <span className={styles.dayNumber}>{Math.floor(Number(routeDay))}</span>
            <span>{routeDay == 1 ? "dia": "dias"}</span>
        </div>
        )}
        <div className={styles.card_info}>
          <NavLink to={to}  className={styles.card_title}>{title}</NavLink>
          
          {Boolean(stars) && 
            generateStars(stars)}

          {Boolean(description) && (
            <div className={styles.card_description}>{description}</div>
          )}
        </div>
        
      </div>
      

    </div>
  );
}

function generateStars(rating: number = -1) {
    const maxStars = 5;
    let starsHtml = '';

    if (rating < 0 || rating > maxStars) {
        return <div className={styles.no_stars}>Sem avaliações</div>
    }
    
    rating = Math.round(rating)

    for (let i = 1; i <= maxStars; i++) {
        starsHtml += i <= rating ? '⭐' : '☆';
    }

    return <div className={styles.stars}>{starsHtml}</div>;
}

<<<<<<< HEAD


=======
>>>>>>> develop
export default Card;