import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 500px;
  background: #ffffff;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media screen and (min-width: 780px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #2c2c2c;
  height: 20px;
`;

export const Icon = styled.div`
  background: transparent;
  width: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #dee2e6;
`;

export const SidebarMenu = styled.ul`
  text-align: center;
  padding: 32px 16px;
  border-bottom: 1px solid #adb5bd;
  grid-template-rows: repeat(4, 60px);
`;

export const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  justify-content: flex-start;
  height: 28px;
  width: 374px;
  margin-bottom: 44px;
  color: black;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #495057;

  :nth-child(3) {
    margin-bottom: 0;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const RegisterBtn = styled(LinkR)`
  padding: 0 16px;

  button {
    width: 333px;
    height: 48px;
    padding: 12px, 28px, 12px, 28px;
    border: 1.5px solid #adb5bd;
    border-radius: 4px;
    margin: 0 auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #0b0d0d;
    background-color: transparent;
  }
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
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

export const SidebarBtn = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  justify-content: flex-start;
  height: 28px;
  width: 374px;
  margin-bottom: 44px;
  margin-top: 32px;
  padding: 0 16px;
  color: black;
  cursor: pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #495057;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
