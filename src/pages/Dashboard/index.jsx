import React from 'react';
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/siderbar/index';
import CardLeilao from '../../components/card_leilao/index';
import CardCarros from '../../components/card_carros';
import Footer from '../../components/footer/index';
import CardMotos from '../../components/card_motos';
import OwnerCarAnnouncements from '../../components/owner_car_announcements';
import { UseLoginProvider } from '../../provider/login';
import { UserUpdateProvider } from '../../provider/update';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  BackgroundColor,
  UserInfo,
  Wrapper,
  Circle,
  Container,
  WhiteWrapper,
  TypeAndName,
} from './styles';
import ModalCreateAnnoucement from '../../components/modals/modal_create_annoucement';

const Dashboard = ({ error }) => {
  const { user, getUser, setUser, handleUpdate } = UseLoginProvider();
  const [open, SetOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    SetOpen(!open);
  };

  const fixedScreen = () => {
    setIsFixed(!isFixed);
  };

  const wrapperFunc = () => {
    toggle();
    fixedScreen();
  };

  useEffect(() => {
    if (!localStorage.getItem('@kenzieMotors:token')) {
      navigate('/');
    }
  }, []);

  return (
    <Container toggle={toggle} isFixed={isFixed}>
      <Sidebar />
      <Navbar fixedScreen={fixedScreen} />
      {open && (
        <ModalCreateAnnoucement toggle={toggle} fixedScreen={fixedScreen} />
      )}

      <Wrapper>
        <BackgroundColor></BackgroundColor>
        <UserInfo>
          <WhiteWrapper>
            <Circle>{user?.name?.split(' ').map((n) => n[0])}</Circle>
            <TypeAndName>
              <span>{user.name}</span>
              <div>{user.account_type}</div>
            </TypeAndName>
            <p>{user.description}</p>
            <button
              onClick={() => {
                fixedScreen();
                toggle();
              }}
            >
              Criar anuncio
            </button>
          </WhiteWrapper>
        </UserInfo>
        <CardLeilao />
        <OwnerCarAnnouncements />
        <CardMotos />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
