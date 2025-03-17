import {CircularProgress} from "@mui/material";
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <CircularProgress disableShrink/>
      <div className={styles.loadingText}>
        Carregando
      </div>
    </div>
  );
}

export default Loading;