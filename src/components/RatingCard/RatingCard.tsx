import styles from "./RatingCard.module.css";
import {Rating, RatingProps} from "@mui/material";
import {NavLink, To} from "react-router-dom";

export interface RatingCardInfoProps {
  title: string;
  description: string | React.ReactNode;
}

export interface RatingCardImageProps {
  image: string;
  title: string;
  className?: string;
}

export interface RatingCardProps {
  to?: To;
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
  const toLink = props.to ? props.to : "#";
  return(
    <div className={styles.ratingContainer + " " + (props.className ?? "")}>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage + " " + (props.image.className ?? "")} src={props.image.image} alt={props.image.title}/>
        <div className={styles.cardContent}>
          <div className={styles.cardText}>
            <NavLink to = {toLink}>
              {props.text}
            </NavLink>
          </div>
          <Rating {...ratingProps}/>
        </div>
      </div>

      {(props.info) &&
          <div className={styles.infoContainer}>
            <div className={styles.infoTitle}>
              <NavLink to = {toLink}>
                {props.info.title}
              </NavLink>
            </div>
            <div className={styles.infoDescription}>{props.info.description}</div>
          </div>
      }
    </div>
  );
}

export default RatingCard;