import React from "react";
import { Container } from "./styles";
import perfil from "../../assets/img/Perfil.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { techs } from "../database/database";
import jornada from "../../assets/img/Jornada.svg";
import { useState } from "react";

function Sobre() {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <h1 id="sobre">Sobre mim</h1>

      <div className="align">
        <div className="align-left">
          <div>
            <figure>
              <img src={perfil} alt="" />
            </figure>

            <span>
              <h2>Kelton Wlysses</h2>
              <h3>Front End Developer</h3>
              <div>
                <a href="https://www.linkedin.com/in/kelton-wlysses/">
                  <AiFillLinkedin size={25} color="white" />
                </a>
                <a href="https://github.com/Kelton-wlysses">
                  <AiFillGithub size={25} color="white" />
                </a>
              </div>
            </span>
          </div>
          <p>
            Olá! Sou apaixonado por tecnologia e por programação desde os meus
            14 anos de idade, que foi quando decidi que queria seguir carreira
            nessa área, meu grande objetivo é solucionar problemas do mundo
            através da tecnologia, de maneira eficiente.
          </p>

          <p>
            Possuo habilidades em: UX & UI Design | HTML | CSS | Javascript |
            Typescript | React.js ( Context API, Styled Components ) | Git |
            Github | SCRUM.
          </p>
        </div>

        <div className="align-right">
          <div className="header">
            <button
              className={active ? "active" : "disable"}
              onClick={() => setActive(true)}
            >
              Ferramentas
            </button>
            |
            <button
              className={!active ? "active" : "disable"}
              onClick={() => setActive(false)}
            >
              Jornada
            </button>
          </div>
          <div className="content">
            {active ? (
              <div className="techs">
                {techs.map((elem) => {
                  return <img src={elem.img} alt="" />;
                })}
              </div>
            ) : (
              <div className="jornada">
                <img src={jornada} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Sobre;
