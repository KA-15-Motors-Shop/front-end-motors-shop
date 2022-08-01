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
} from './styles';

const Navbar = () => {
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
              <NavLinks>Carros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Motos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">Leilao</NavLinks>
            </NavItem>

            <Vl></Vl>

            <NavBtn>
              <NavBtnLinkLogin to="signin=">Fazer Login</NavBtnLinkLogin>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="signin=">Cadastrar</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
