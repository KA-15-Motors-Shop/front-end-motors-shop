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

const CardLeilao = () => {
  return (
    <Container>
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
          <SwiperSlide>
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
                    backgroundImage: `url(${Car})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: '-1',
                  }}
                ></Img>
                <Description>
                  <Time>
                    <img src={Clock}></img>
                    <span>01:58:00</span>
                  </Time>
                  <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <img src={Circle}></img>
                    <span>Rodrigo Tavares</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
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
          <SwiperSlide>
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
                    backgroundImage: `url(${Car})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: '-1',
                  }}
                ></Img>
                <Description>
                  <Time>
                    <img src={Clock}></img>
                    <span>01:58:00</span>
                  </Time>
                  <h2>
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{' '}
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <img src={Circle}></img>
                    <span>Rodrigo Tavares</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
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
          <SwiperSlide>
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
                    backgroundImage: `url(${Car})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: '-1',
                  }}
                ></Img>
                <Description>
                  <Time>
                    <img src={Clock}></img>
                    <span>01:58:00</span>
                  </Time>
                  <h2>
                    Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{' '}
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <img src={Circle}></img>
                    <span>Rodrigo Tavares</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
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
        </Swiper>
      </Wr>
    </Container>
  );
};

export default CardLeilao;
