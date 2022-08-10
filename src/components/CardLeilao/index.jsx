import React, { ImageBackground } from 'react';
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
      </Wr>
    </Container>
  );
};

export default CardLeilao;
