import styles from './RouteSelector.module.css';

interface RouteSelectorProps {
  currentRouteId: number;
  onRouteChange?: (id: number) => void;
}

interface RouteOption {
  id: number;
  label: string;
}

const RouteSelector: React.FC<RouteSelectorProps> = ({ currentRouteId, onRouteChange }) => {
  const routeOptions: RouteOption[] = [
    { id: 1, label: "dia" },
    { id: 2, label: "dias" },
    { id: 3, label: "dias" },
    { id: 5, label: "dias" },
    { id: 7, label: "dias" },
    { id: 10, label: "dias" },
  ];

  const navigateToRoute = (targetId: number) => {
    if (targetId !== currentRouteId) {
      try {
        if (onRouteChange) {
          onRouteChange(targetId);
        } else {
          window.location.href = `/#/rotas/${targetId}`;
        }
      } catch (error) {
        console.error("Erro ao navegar para a rota:", error);
      }
    }
  };

  return (
    <div className={styles.route_selector_container}>
      <h3 className={styles.route_selection_heading}>Quanto tempo você tem para conhecer Penedo?</h3>
      
      <div className={styles.routes_selector}>
        {routeOptions.map((option) => (
          <div 
            key={option.id}
            className={`${styles.route_option_wrapper} ${option.id === currentRouteId ? styles.route_option_wrapper_active : ''}`}
          >
            <button
              onClick={() => navigateToRoute(option.id)}
              className={`${styles.route_option} ${option.id === currentRouteId ? styles.route_option_active : ''}`}
              aria-label={`Roteiro de ${option.id} ${option.label}`}
            >
              <span className={styles.route_option_number}>{option.id}</span>
              <span className={styles.route_option_label}>{option.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteSelector;
