import React from 'react';
import Navbar from '../navbar';
import { Container, Box, ContainerBox, TitleDesc } from './style';
//import Motors from '../../assets/Motors.png';
//import { FaBars } from 'react-icons/fa';

function Header () {
  return (
    <Container>
      <Navbar />
      <ContainerBox>
        <Box>
          <TitleDesc>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </TitleDesc>
          <div>
            <button>Leilão</button>
            <button>Carros</button>
            <button>Motos</button>
          </div>
        </Box>
      </ContainerBox>
    </Container>
  );
};

export default Header
