import React from "react";
import { Container } from "./styles";
import { projects } from "../database/database";

function Portifolio() {
  return (
    <Container>
      <h1 id="portifolio">Portifolio</h1>
      <p>Trabalhos mais recentes</p>

      <div className="content">
        <>
          {projects.map((elem) => {
            return (
              <div className="card">
                <h1>{elem.nome}</h1>

                <figure>
                  <img src={elem.img} alt="" />
                </figure>

                <a href={elem.link}>
                  <button>ver mais</button>
                </a>
              </div>
            );
          })}
        </>
      </div>
    </Container>
  );
}
export default Portifolio;
