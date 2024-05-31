import React from "react";
import "./Section.css";
import imagePerfil from "../../../../public/Logo-Perfil.jpg";
import logoSena from "../../../../public/logo-sena.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok";

const Section = () => {
  return (
    <div className="section">
      <img src={imagePerfil} alt="" />
      <h2 className="nombre"> David Gaona Henao</h2>
      <hr />
      <h3 className="perfil-h3">Perfil</h3>
      <h3 className="perfil-h3">Proyectos</h3>
      <h3 className="perfil-h3">Referencias</h3>
      <h3 className="perfil-h3">Experiencia</h3>
      <img className="logo-sena-img" src={logoSena} alt="" />
      <div className="redes-sociales">
        <a href="https://github.com/xXINFINITE117Xx">
          <FontAwesomeIcon icon={faGithub} className="redes" />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100012821021744&locale=es_LA">
          <FontAwesomeIcon icon={faFacebook} className="redes" />
        </a>
        <a href="https://www.instagram.com/davidgaonahenao/">
          <FontAwesomeIcon icon={faInstagram} className="redes" />
        </a>
        <a href="https://twitter.com/xinfinite117x">
          <FontAwesomeIcon icon={faTwitter} className="redes" />
        </a>
        <a href="https://www.tiktok.com/@xxghostxx29?lang=es">
          <FontAwesomeIcon icon={faTiktok} className="redes" />
        </a>
      </div>
    </div>
  );
};

export default Section;
