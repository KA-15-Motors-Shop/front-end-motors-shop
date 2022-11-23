import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  /* margin-top: -80px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  background-color: var(--whitefixed);
  padding: 0 20px;
  justify-content: space-between;
  border-bottom: 2px solid #dee2e6;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding: 0 24px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  img {
    width: 153.02px;
    height: 26.34px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 24px;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

export const LoginAndRegister = styled.div`
  display: flex;
  align-items: center;
  /* display: ${({ isLogged }) => (isLogged ? 'flex' : 'none')}; */
`;

export const UserLogged = styled.div`
  /* display: ${({ teste }) => (teste ? 'none' : 'flex')}; */
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: var(--grey2);
  font-weight: 400;
  font-family: 'Inter';
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  :hover {
    color: #0b0d0d;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  white-space: nowrap;
  font-weight: bold;
  color: var(--grey2);
  background-color: var(--whitefixed);
  font-size: 16px;
  padding: 12px 28px;
  border: 1.5px solid #adb5bd;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    transition: 0.2s;
    background-color: var(--grey1);
    color: var(--grey10);
  }
`;

export const NavBtnLinkLogin = styled(LinkR)`
  border: none;
  font-weight: 600;
`;

export const Vl = styled.div`
  border-left: 2px solid #dee2e6;
  height: 78px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const InitialName = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 150px;
  background-color: #5126ea;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 9px;
`;
