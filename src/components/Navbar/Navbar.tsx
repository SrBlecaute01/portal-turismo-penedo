import {NavLink, To, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css';
import Logo from '../../assets/svg/logo.svg?react';

interface NavRouteProps {
  to: To;
  label: string;
}

function NavRoute({to, label}: NavRouteProps) {
  return (
    <li>
      <NavLink to={to} className={({isActive}) => isActive ? styles.active : ""}>
        {label}
      </NavLink>
    </li>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.container}>
      <Logo
        className={styles.logo}
        onClick={() => navigate('/')}
      />
      <ul className={styles.routes}>
        <NavRoute to="/" label="Início"/>
        <NavRoute to="/hoteis" label="Hotéis"/>
        <NavRoute to="/restaurantes" label="Restaurantes"/>
        <NavRoute to="/eventos" label="Eventos"/>
        <NavRoute to="/turismo" label="Turismo"/>
        <NavRoute to="/rotas" label="Rotas"/>
        <NavRoute to="/mapa" label="Mapa"/>
      </ul>
    </nav>
  );
}

export default Navbar;