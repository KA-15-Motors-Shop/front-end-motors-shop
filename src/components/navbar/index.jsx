import React from 'react';
import { FaBars } from 'react-icons/fa';
import Motors from '../../assets/Motors.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLinkLogin,
  Vl,
} from './style';

function Navbar () {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Motors} alt="brand" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/leilao">Carros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/leilao">Motos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/leilao">Leilao</NavLinks>
            </NavItem>

            <Vl></Vl>

            <NavBtn>
              <NavBtnLinkLogin to="/login">Fazer Login</NavBtnLinkLogin>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/register">Cadastrar</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
