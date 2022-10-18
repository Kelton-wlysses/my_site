import React from "react";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainHome from "../../components/MainHome";
import Portifolio from "../../components/Portfolio";
import Sobre from "../../components/Sobre";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <MainHome />
      <Portifolio />
      <Sobre />
      <Contato />
      <Footer />
    </Container>
  );
}

export default Home;
