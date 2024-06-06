import React from "react";
import "./Main.css";
import PortafolioSection from "../../Ul/PortafolioSection/Portafolio";
import imageReact from "../../../../public/react.png";
import imageNode from "../../../../public/nodejs.png";
import imageMongodb from "../../../../public/mongodb.png";
import imageJava from "../../../../public/java.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Main = () => {
  const projectData = [
    {
      title: "Calidad De Software",
      description: "Pagina sobre el Iso 27001",
      link: "Ir al proyecto",
      projectURL: "https://calidad-software-clonacion.vercel.app",
      imageUrl: "../../../../Calidad-de-software.png",
    },
    {
      title: "Projecto Triqui",
      description: "Juego del triqui",
      link: "Ir al proyecto",
      projectURL: "https://triqui-game-rozo.vercel.app",
      imageUrl: "../../../../Triqui.png",
    },
    {
      title: "Clonacion De Pagina",
      description: "Clonacion basada en una imagen",
      link: "Ir al proyecto",
      projectURL: "https://trabajo-clonacion-henry-falla.vercel.app/#Full",
      imageUrl: "../../../../Clonacion.png",
    },
    {
      title: "Projecto Portafolio",
      description: "Pagina sobre mi portafolio",
      link: "Ir al proyecto",
      projectURL: "https://deploy-vercel-completed.vercel.app",
      imageUrl: "../../../../Portafolio.png",
    },
  ];
  const referenceData = [
    {
      name: "David Gaona ",
      position: "Aprendiz ",
      phone: "3206380095",
      email: "davidgaonahenao@gmail.com",
    },
    {
      name: "David Gaona ",
      position: "Aprendiz ",
      phone: "3206380095",
      email: "davidgaonahenao@gmail.com",
    },
    {
      name: "David Gaona ",
      position: "Aprendiz ",
      phone: "3206380095",
      email: "davidgaonahenao@gmail.com",
    },
  ];
  return (
    <main className="main">
      <PortafolioSection
        title="Perfil"
        hasBorder={true}
        progressValue="100"
        height="5px"
      ></PortafolioSection>
      <p className="parrafo-perfil">
        Desarrollador de software con experiencia en tecnologías como
        JavaScript, SQL, MySQL, HTML, CSS y manejo de versiones con GIT. Me
        especializo en el desarrollo de aplicaciones frontend y backend
        utilizando estas tecnologías para crear interfaces de usuario atractivas
        y funcionales. Además de mis competencias técnicas, poseo habilidades
        interpersonales como comunicación efectiva, adaptabilidad, pensamiento
        crítico y trabajo en equipo. Estoy comprometido en colaborar en
        proyectos desafiantes donde pueda aplicar todas mis destrezas para
        desarrollar soluciones de calidad y generar un impacto positivo en el
        campo del desarrollo de aplicaciones. Me entusiasman las oportunidades
        que me permitan impulsar el éxito de los proyectos y contribuir al
        crecimiento de los equipos de desarrollo.
      </p>

      <PortafolioSection
        title="Proyectos"
        hasBorder={false}
        progressValue="100"
        height="5px"
      ></PortafolioSection>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div key={index} className="project">
            <div className="image-container">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="content-container">
              <h2 className="titulo-h2">{project.title}</h2>
              <p className="description">{project.description}</p>
              <a
                href={project.projectURL}
                target="_black"
                rel="noopener-noreferrer"
              >
                <button className="button-link">{project.link}</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <PortafolioSection
        title="Referencias"
        hasBorder={true}
        progressValue="100"
        height="5px"
      ></PortafolioSection>

      <div className="reference-container">
        {referenceData.map((reference, index) => (
          <div key={index} className="reference">
            <div className="reference-texto">
              <p>Nombre: {reference.name}</p>
              <p>Cargo: {reference.position}</p>
              <p>Teléfono: {reference.phone}</p>
              <p>Email: {reference.email}</p>
            </div>
          </div>
        ))}
      </div>

      <PortafolioSection
        title="Experiencia"
        hasBorder={false}
        progressValue="0"
        height="5px"
      ></PortafolioSection>
      <div className="contenedor-image">
        <div className="image-react">
          <img src={imageReact} alt="" />

          <ProgressBar completed={50} className="progress-bar-linea" />
          <h2>React</h2>
        </div>
        <div className="image-react">
          <img src={imageNode} alt="" />

          <ProgressBar completed={50} className="progress-bar-linea" />
          <h2>Nodejs</h2>
        </div>
        <div className="image-react">
          <img src={imageMongodb} alt="" />

          <ProgressBar completed={50} className="progress-bar-linea" />
          <h2>Mongodb</h2>
        </div>
        <div className="image-react">
          <img src={imageJava} alt="" />

          <ProgressBar completed={50} className="progress-bar-linea" />
          <h2>Java</h2>
        </div>
      </div>
    </main>
  );
};

export default Main;
