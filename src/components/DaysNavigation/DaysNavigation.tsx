import { FC } from 'react';
import styles from './DaysNavigation.module.css';

interface DaysNavigationProps {
  daysCount: number;
  currentDayIndex: number;
  onPreviousDay: () => void;
  onNextDay: () => void;
  onSelectDay: (index: number) => void;
}

const DaysNavigation: FC<DaysNavigationProps> = ({
  daysCount,
  currentDayIndex,
  onPreviousDay,
  onNextDay,
  onSelectDay
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.dayTitle}>Dia {currentDayIndex + 1}</h3>
      
      <div className={styles.navigation}>
        <button 
          onClick={onPreviousDay}
          disabled={currentDayIndex === 0}
          className={`${styles.arrowBtn} ${currentDayIndex === 0 ? styles.disabled : ''}`}
          aria-label="Dia anterior"
        >
          Anterior
        </button>
        
        <div className={styles.indicators}>
          {Array.from({ length: daysCount }).map((_, day) => (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              className={`${styles.dayBtn} ${day === currentDayIndex ? styles.active : ''}`}
              aria-label={`Dia ${day + 1}`}
              aria-current={day === currentDayIndex ? "page" : undefined}
            >
              {day + 1}
            </button>
          ))}
        </div>
        
        <button 
          onClick={onNextDay}
          disabled={currentDayIndex === daysCount - 1}
          className={`${styles.arrowBtn} ${currentDayIndex === daysCount - 1 ? styles.disabled : ''}`}
          aria-label="Próximo dia"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default DaysNavigation;
