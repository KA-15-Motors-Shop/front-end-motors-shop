import React, { ImageBackground } from 'react';
import './styless.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import {
  Wrapper,
  InfoSection,
  AccessPage,
  Container,
  Img,
  Time,
  Description,
  Wr,
  Title,
  User,
  CarInfo,
  WrapperInfo,
} from './styles';
import Car from '../../assets/Photo.png';
import Ret from '../../assets/Pattern.png';
import Circle from '../../assets/circle.png';
import Clock from '../../assets/clock.png';
import Arrow from '../../assets/arrow.png';

const mainProjects = [
  {
    id: '1',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image: Car,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Rodrigo Tavares',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '2',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image: Car,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Rodrigo Tavares',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
  {
    id: '3',
    time: '01:58:00',
    title: 'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes',
    image: Car,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
    initial: 'SL',
    user: 'Rodrigo Tavares',
    year: '2013',
    km: '0 km',
    price: 'R$ 00.000,00',
  },
];

const CardLeilao = () => {
  return (
    <Container id="leilao">
      <Title>
        <h1>Leilão</h1>
      </Title>
      <Wr>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={'auto'}
          spaceBetween={24}
          breakpoints={{
            // when window width is >= 320px
            320: {
              spaceBetween: 9,
            },
            // when window width is >= 480px
            480: {
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              spaceBetween: 24,
            },
          }}
        >
          {mainProjects.map((user) => (
            <SwiperSlide key={user.id}>
              <Wrapper>
                <InfoSection
                  style={{
                    backgroundImage: `url(${Ret})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <Img
                    style={{
                      backgroundImage: `url(${user.image})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      zIndex: '-1',
                    }}
                  ></Img>
                  <Description>
                    <Time>
                      <img src={Clock}></img>
                      <span>{user.time}</span>
                    </Time>
                    <h2>{user.title}</h2>
                    <p>{user.description}</p>
                    <User>
                      <img src={Circle}></img>
                      <span>{user.user}</span>
                    </User>
                    <CarInfo>
                      <WrapperInfo>
                        <div>{user.year}</div>
                        <div>{user.km}</div>
                      </WrapperInfo>
                      <span>{user.price}</span>
                    </CarInfo>
                  </Description>
                </InfoSection>

                <AccessPage>
                  <div>
                    <span>Acessar página do leilão</span>
                    <img src={Arrow}></img>
                  </div>
                </AccessPage>
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wr>
    </Container>
  );
};

export default CardLeilao;
