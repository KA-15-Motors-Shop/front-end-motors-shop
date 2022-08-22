import React from 'react';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import {
  Wrapper,
  InfoSection,
  AccessPage,
  Container,
  Title,
  Wr,
  ImgContainer,
  User,
  CarInfo,
  WrapperInfo,
} from './styles';
import Moto from '../../assets/moto.png';

const mainProjects = [
  {
    id: '1',
    title: 'Product title stays here - max 1 line',
    image: Moto,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Samuel Leao',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '2',
    title: 'Product title stays here - max 1 line',
    image: Moto,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Samuel Leao',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '3',
    title: 'Product title stays here - max 1 line',
    image: Moto,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Samuel Leao',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '4',
    title: 'Product title stays here - max 1 line',
    image: Moto,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Samuel Leao',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '5',
    title: 'Product title stays here - max 1 line',
    image: Moto,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Samuel Leao',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
];

const CardMotos = () => {
  return (
    <Container>
      <Title>
        <h1>Motos</h1>
      </Title>
      <Wr>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={'auto'}
          spaceBetween={48}
          breakpoints={{
            // when window width is >= 320px
            320: {
              spaceBetween: 12,
            },
            // when window width is >= 480px
            480: {
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              spaceBetween: 48,
            },
          }}
        >
          {mainProjects.map((user) => (
            <SwiperSlide key={user.id}>
              <Wrapper>
                <InfoSection>
                  <ImgContainer>
                    <a href="https://www.google.com.br/">
                      <img src={user.image}></img>
                    </a>
                  </ImgContainer>
                  <div>
                    <h1>{user.title}</h1>
                    <p>{user.description}</p>
                    <User>
                      <div>{user.initial}</div>
                      <span>{user.name}</span>
                    </User>
                    <CarInfo>
                      <WrapperInfo>
                        <div>{user.year}</div>
                        <div>{user.km}</div>
                      </WrapperInfo>
                      <span>{user.price}</span>
                    </CarInfo>
                  </div>
                </InfoSection>
                <AccessPage></AccessPage>
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wr>
    </Container>
  );
};

export default CardMotos;
