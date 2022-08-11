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
          <SwiperSlide>
            <Wrapper>
              <InfoSection>
                <ImgContainer>
                  <img src={Moto}></img>
                </ImgContainer>
                <div>
                  <h1>Product title stays here - max 1 line</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <div>SL</div>
                    <span>Samuel Leão</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
                  </CarInfo>
                </div>
              </InfoSection>
              <AccessPage></AccessPage>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <InfoSection>
                <ImgContainer>
                  <img src={Moto}></img>
                </ImgContainer>
                <div>
                  <h1>Product title stays here - max 1 line</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <div>SL</div>
                    <span>Samuel Leão</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
                  </CarInfo>
                </div>
              </InfoSection>
              <AccessPage></AccessPage>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <InfoSection>
                <ImgContainer>
                  <img src={Moto}></img>
                </ImgContainer>
                <div>
                  <h1>Product title stays here - max 1 line</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <div>SL</div>
                    <span>Samuel Leão</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
                  </CarInfo>
                </div>
              </InfoSection>
              <AccessPage></AccessPage>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <InfoSection>
                <ImgContainer>
                  <img src={Moto}></img>
                </ImgContainer>
                <div>
                  <h1>Product title stays here - max 1 line</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <div>SL</div>
                    <span>Samuel Leão</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
                  </CarInfo>
                </div>
              </InfoSection>
              <AccessPage></AccessPage>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <InfoSection>
                <ImgContainer>
                  <img src={Moto}></img>
                </ImgContainer>
                <div>
                  <h1>Product title stays here - max 1 line</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem...
                  </p>
                  <User>
                    <div>SL</div>
                    <span>Samuel Leão</span>
                  </User>
                  <CarInfo>
                    <WrapperInfo>
                      <div>2013</div>
                      <div>0 Km</div>
                    </WrapperInfo>
                    <span>R$ 00.000,00</span>
                  </CarInfo>
                </div>
              </InfoSection>
              <AccessPage></AccessPage>
            </Wrapper>
          </SwiperSlide>
        </Swiper>
      </Wr>
    </Container>
  );
};

export default CardMotos;
