import styles from "./RatingCard.module.css";
import {Rating, RatingProps} from "@mui/material";

export interface RatingCardInfoProps {
  title: string;
  description: string;
}

export interface RatingCardImageProps {
  image: string;
  title: string;
  className?: string;
}

export interface RatingCardProps {
  text?: string;
  className?: string;
  image: RatingCardImageProps;
  info?: RatingCardInfoProps
  rating?: RatingProps
}

const defaultRatingProps: RatingProps = {
  name: "size-small",
  defaultValue: 5,
  precision: 0.5,
  size: "small",
  readOnly: true,
}

function RatingCard(props: RatingCardProps) {
  const ratingProps = { ...defaultRatingProps, ...props.rating };
  return(
    <div className={styles.ratingContainer + " " + (props.className ?? "")}>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage + " " + (props.image.className ?? "")} src={props.image.image} alt={props.image.title}/>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>{props.text}</div>
          <Rating {...ratingProps}/>
        </div>
      </div>

      {(props.info) &&
          <div className={styles.infoContainer}>
              <div className={styles.infoTitle}>{props.info.title}</div>
              <div className={styles.infoDescription}>{props.info.description}</div>
          </div>
      }
    </div>
  );
}

export default RatingCard;