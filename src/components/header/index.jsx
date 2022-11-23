import React from 'react';
import Navbar from '../navbar';
import { Container, Box, ContainerBox, TitleDesc, Btnn } from './style';
//import Motors from '../../assets/Motors.png';
//import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../../provider/auth';

function Header() {
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
            <Btnn to="leilao">Leilão</Btnn>
            <Btnn to="carros">Carros</Btnn>
            <Btnn to="motos">Motos</Btnn>
          </div>
        </Box>
      </ContainerBox>
    </Container>
  );
}

export default Header;
