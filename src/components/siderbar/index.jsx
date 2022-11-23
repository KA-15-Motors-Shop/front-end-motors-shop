import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtn,
  NavLogo,
  NavWrapper,
  RegisterBtn,
} from './styles';
import Motors from '../../assets/Motors.png';
import { AuthContext } from '../../provider/auth';

const Sidebar = () => {
  const { isOpen, toggle } = React.useContext(AuthContext);

  return (
    <SidebarContainer isOpen={isOpen} aria-hidden="true">
      <NavWrapper>
        <NavLogo to="/">
          <img src={Motors} alt="brand" />
        </NavLogo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </NavWrapper>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="Carros">
            Carros
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Motos">
            Motos
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Leilao">
            Leilao
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarBtn onClick={toggle} to="/login">
            Fazer Login
          </SidebarBtn>
          <RegisterBtn to="/register">
            <button>Cadastrar</button>
          </RegisterBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
