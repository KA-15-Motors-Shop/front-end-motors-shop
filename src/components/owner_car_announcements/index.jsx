import React from 'react';
import './stylesa.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { UseLoginProvider } from '../../provider/login';

const OwnerCarAnnouncements = () => {
  const { user, getUser, setUser, handleUpdate } = UseLoginProvider();

  let navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <Container id="carros">
      <Title>
        <h1>Carros</h1>
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
          {user['announcements']?.map((user) => (
            <SwiperSlide key={user.id}>
              <Wrapper>
                <InfoSection>
                  <ImgContainer>
                    <Link
                      to={`/announcements/${user.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <img src={user.img_url}></img>
                    </Link>
                  </ImgContainer>
                  <div>
                    <h1>{user.title}</h1>
                    <p>{user.description}</p>
                    <User>
                      <div></div>
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

export default OwnerCarAnnouncements;
