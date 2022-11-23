import React, { useState, useEffect } from 'react';
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
import { api } from '../../service/index';

const CardMotos = () => {
  const [products, setProduct] = useState([]);

  const getProduct = async (data) => {
    const responsee = await api
      .get(`announcements`)
      .then((res) => {
        const result = res.data.filter((curData) => {
          return curData.vehicle_type === 'Moto';
        });
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container id="motos">
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
          {products.map((user) => (
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
