import React from 'react'
import { Container } from './styles';

function Contato() {
  return (
    <Container>
      <h2 id='contato'>Entre em contato</h2>

      <form action="">

        <div>
          <input className='input-nome' type="text" placeholder='Nome'/>
          <input className='input-fone' type="tel"  placeholder='Fone'/>
        </div>
        <input className='input-email' type="email" placeholder='Email'/>

        <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>

        <button>Enviar</button>
      </form>
    </Container>
  )
}

export default Contato;