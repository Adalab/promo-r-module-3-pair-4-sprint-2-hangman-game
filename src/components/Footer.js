import '../styles/Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className={`footer__menu-item `}>
            <NavLink className="footer__menu-link" activeclassname="active" to="#/">
              A jugar
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link active" activeclassname="active" to="#/instructions">
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink className="footer__menu-link" activeclassname="active" to="#/options">
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">©️ Adalab</small>
    </footer>
  );
};

export default Footer;