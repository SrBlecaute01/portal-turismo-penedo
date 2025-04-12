import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logoImg from "../../assets/logo-portal.png"; // Ajuste o caminho conforme necessário

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Bloco 1: Sobre o Portal */}
        <div className={styles.footerBlock}>
          <h3 className={styles.blockTitle}>Sobre Penedo</h3>
          <div className={styles.logoContainer}>
            <img
              src={logoImg}
              alt="Logo Portal Turismo Penedo"
              className={styles.logo}
            />
          </div>
          <p className={styles.blockText}>
            Portal dedicado ao turismo na histórica cidade de Penedo, Alagoas.
            Conheça os pontos turísticos, gastronomia, hospedagem e toda a
            cultura desta cidade rica em história e belezas naturais.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className={styles.footerBlock}>
          <h3 className={styles.blockTitle}>Contato</h3>
          <address className={styles.contactInfo}>
            <p>
              <FaMapMarkerAlt className={styles.contactIcon} />
              Praça Barão de Penedo, Centro Histórico
              <br />
              Penedo, AL, 57200-000
            </p>
            <p>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:contato@turismopenedo.com.br" className={styles.mail}>
                contato@turismopenedo.com.br
              </a>
            </p>
            <p>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:+558232511422" className={styles.phone}>(82) 3251-1422</a>
            </p>
          </address>
        </div>

        {/* Bloco 3: Links Úteis */}
        <div className={styles.footerBlock}>
          <h3 className={styles.blockTitle}>Receba notícias via e-mail</h3>
          <div className={styles.newsletter}>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Seu e-mail"
                aria-label="E-mail para newsletter"
                required
              />
              <button type="submit">Inscrever</button>
            </form>
          </div>
          <p className={styles.blockTextSubmit}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repellat minus dolorum perferendis, illum reprehenderit iure voluptatibus, rerum quidem quae officiis aliquid qui iusto, enim laudantium! Quod vel numquam quos. lorem
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {currentYear} Portal Turismo Penedo. Todos os direitos
          reservados.
        </p>
        <p>
          <Link to="/privacidade">Política de Privacidade</Link> |
          <Link to="/termos"> Termos de Uso</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
