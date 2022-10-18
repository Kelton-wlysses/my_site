/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Container } from './styles';
import Foto from '../../assets/img/Foto.png'
import { Button_primary } from '../Button/styles';

function MainHome() {
  return (
    <Container>

      <div className='content'>
        <div>
          <p>Olá, meu nome é</p>
          <h1>Kelton Wlysses</h1>
          <p>Desenvolvedor <span>Front End</span></p>
          <p>experiência em <span>UX design</span> e alta</p>
          <p>qualidade em aplicações <span>react</span></p>
        </div>
        <Button_primary>
          <a href="#contato">contato</a>
        </Button_primary>
      </div>

      <div className='img'>
        <figcaption>
          <img src={Foto} alt="" />
        </figcaption>
      </div>

    </Container>
  )
}

export default MainHome;