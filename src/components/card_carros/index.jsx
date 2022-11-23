import React from 'react';
import './stylesa.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../provider/auth';
import { useEffect, useState } from 'react';
import { api } from '../../service/index';
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
import Car from '../../assets/car.png';
import secondCar from '../../assets/secondCar.png';
import { UseLoginProvider } from '../../provider/login';

const CardCarros = () => {
  const [products, setProduct] = useState([]);
  let navigate = useNavigate();

  const getProduct = async (data) => {
    const responsee = await api
      .get(`announcements`)
      .then((res) => {
        const result = res.data.filter((curData) => {
          return curData.vehicle_type === 'Car';
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
  console.log(products);

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
          {products?.map((user) => (
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
                      <div>
                        {user?.owner?.name?.split(' ').map((n) => n[0])}
                      </div>
                      <span>{user?.owner?.name}</span>
                    </User>
                    <CarInfo>
                      <WrapperInfo>
                        <div>{user.km}</div>
                        <div>{user.year}</div>
                      </WrapperInfo>
                      <span>R$ {user.price}</span>
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

export default CardCarros;
