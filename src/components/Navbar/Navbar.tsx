import {NavLink, To, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css';
import Logo from '../../assets/svg/logo.svg?react';
import MenuIcon from '../../assets/svg/menu.svg?react';
import CloseIcon from '../../assets/svg/close.svg?react';
import {useEffect, useState} from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen])

  return (
    <nav className={styles.container}>
      <Logo
        className={styles.logo}
        onClick={() => navigate('/')}
      />

      {isMenuOpen ? (
        <CloseIcon
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
      ) : (
        <MenuIcon
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
      )}

      <ul className={`${styles.routes} ${isMenuOpen ? styles.open : ""}`}>
        <NavRoute to="/" label="Início" />
        <NavRoute to="/hoteis" label="Hotéis" />
        <NavRoute to="/restaurantes" label="Restaurantes" />
        <NavRoute to="/eventos" label="Eventos" />
        <NavRoute to="/turismo" label="Turismo" />
        <NavRoute to="/rotas" label="Rotas" />
        <NavRoute to="/mapa" label="Mapa" />
      </ul>
    </nav>
  );
}

export default Navbar;