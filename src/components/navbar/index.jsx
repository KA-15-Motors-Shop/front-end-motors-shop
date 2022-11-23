import React from 'react';
import { FaBars } from 'react-icons/fa';
import Motors from '../../assets/Motors.png';
import { AuthContext } from '../../provider/auth';
import { UseLoginProvider } from '../../provider/login';
import ModalEdit from '../modals/modal_edit';
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
  LoginAndRegister,
  UserLogged,
  InitialName,
} from './style';
import { useState } from 'react';

function Navbar({ fixedScreen }) {
  const [open, SetOpen] = useState(false);
  const { toggle } = React.useContext(AuthContext);
  const { user, getUser, setUser } = UseLoginProvider();
  // const [isLogged, SetisLogged] = useState(true);
  const isLogged = localStorage.getItem('@kenzieMotors:user');

  const editToggle = () => {
    SetOpen(!open);
  };
  // const name = user.name || null;

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Motors} alt="brand" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="carros">Carros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/leilao">Motos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/leilao">Leilao</NavLinks>
            </NavItem>

            <Vl></Vl>
            {!isLogged ? (
              <LoginAndRegister>
                <NavBtn>
                  <NavBtnLinkLogin to="/login">Fazer Login</NavBtnLinkLogin>
                </NavBtn>
                <NavBtn>
                  <NavBtnLink to="/register">Cadastrar</NavBtnLink>
                </NavBtn>
              </LoginAndRegister>
            ) : (
              <UserLogged onClick={editToggle}>
                <InitialName>
                  {user.name.split(' ').map((n) => n[0])}
                </InitialName>
                <span>{user.name}</span>
              </UserLogged>
            )}
            {open && (
              <ModalEdit editToggle={editToggle} fixedScreen={fixedScreen} />
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
