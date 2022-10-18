import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <div className="align-left">
        <figure>
          <a href="#home">
            <img src={Logo} alt="" />
          </a>
          <p>Front End Developer</p>
        </figure>
      </div>
      <div className="align-right">
        <ul>
          <a href="#sobre">Sobre mim</a>
          <a href="#portifolio">Portifolio</a>
          <a href="#contato">Contato</a>
        </ul>

        <div>
          <a href="https://www.linkedin.com/in/kelton-wlysses/">
            <AiFillLinkedin size={25} color="white" />
          </a>
          <a href="https://github.com/Kelton-wlysses">
            <AiFillGithub size={25} color="white" />
          </a>
        </div>
      </div>

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

export default Footer;
