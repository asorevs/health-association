import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Suscríbete al boletín para recibir información de nuestros próximos
          eventos.
        </p>
        <p className="footer-subscription-text">
          Puedes darte de baja en cualquier momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Dirección de Correo"
            />
            <Button buttonStyle="btn--outline">Subscribirme</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Acerca de Nosotros</h2>
            <Link to="/">Quienes Somos</Link>
            <Link to="/">Testimonios</Link>
            <Link to="/">Términos de Servicio</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contáctanos</h2>
            <Link to="/">Contacto</Link>
            <Link to="/">Ayuda</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Eventos</h2>
            <Link to="/">Congresos</Link>
            <Link to="/">Calendario</Link>
          </div>
          <div className="footer-link-items">
            <h2>Redes Sociales</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              AMEEFRHS
              <i className="font-awe-logo fa-solid fa-staff-snake"></i>
            </Link>
          </div>
          <small className="website-rights">AMEEFHRS © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
