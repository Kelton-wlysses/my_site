import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/img/Logo.svg";

function Header() {
  return (
    <Container>
      <figcaption id="home">
        <img src={Logo} alt="Logo" />
      </figcaption>

      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#portifolio">Portfolio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      <script>
        {document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth",
            });
          });
        })}
      </script>
    </Container>
  );
}

export default Header;
