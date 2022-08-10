import React from 'react';
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

const CardCarros = () => {
  return (
    <Container>
      <Title>
        <h1>Carros</h1>
      </Title>
      <Wr>
        <Wrapper>
          <InfoSection>
            <ImgContainer>
              <img src={Car}></img>
            </ImgContainer>
            <div>
              <h1>Product title stays here - max 1 line</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
        <Wrapper>
          <InfoSection>
            <ImgContainer>
              <img src={Car}></img>
            </ImgContainer>
            <div>
              <h1>Product title stays here - max 1 line</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
        <Wrapper>
          <InfoSection>
            <ImgContainer>
              <img src={Car}></img>
            </ImgContainer>
            <div>
              <h1>Product title stays here - max 1 line</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
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
      </Wr>
    </Container>
  );
};

export default CardCarros;
