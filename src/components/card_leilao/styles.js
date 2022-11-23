import styled from 'styled-components';
import Car from '../../assets/Photo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;

  @media screen and (min-width: 1440px) {
    padding: 0 60px;
  }
`;

export const Title = styled.div`
  padding: 100px 0px 37px;

  h1 {
    color: #000000;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0px 40px;
  }
`;

export const Wr = styled.div`
  overflow-x: auto;
  width: 100%;
  gap: 12px;
  display: flex;
  box-sizing: border-box;

  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-bottom: 200px;

    ::-webkit-scrollbar {
      height: 8px;
      cursor: pointer;
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
    }

    ::-webkit-scrollbar-track-piece:end {
      margin-right: 60px;
    }

    ::-webkit-scrollbar-track-piece:start {
      margin-left: 60px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 328px;
  height: 496px;
  flex-shrink: 0;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 735px;
    height: 388px;
  }

  h1 {
    color: black;
  }

  :first-child {
  }
`;

export const Img = styled.div`
  width: 287px;
  height: 155.4px;
  margin-top: 116px;

  @media screen and (min-width: 1440px) {
    width: 581.96px;
    height: 315.11px;
    margin-top: 0;
  }
`;

export const Description = styled.div`
  position: absolute;
  width: 275px;
  height: 298px;

  h2 {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #fdfdfd;
    margin-bottom: 16px;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #ced4da;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 663px;
    height: 177px;

    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const Time = styled.div`
  width: 123px;
  height: 36px;
  border-radius: 32px;
  background-color: #ffffff;
  margin-top: 33px;
  margin-bottom: 35px;
  padding: 8px;
  display: flex;

  @media screen and (min-width: 1440px) {
    margin-bottom: 69px;
    margin-top: 24px;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  span {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #212529;
  }
`;

export const InfoSection = styled.div`
  height: 326px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    height: 326px;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  width: 275px;

  @media screen and (min-width: 1440px) {
    width: 639px;
    justify-content: space-between;
    flex-direction: row;
  }

  span {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 32px;
    background-color: #edeafd;
    color: #4529e6;
    padding: 4px, 8px, 4px, 8px;
    border-radius: 4px;

    :first-child {
      margin-right: 12px;
    }
  }
`;

export const AccessPage = styled.div`
  height: 62px;
  width: 100%;
  background-color: #4529e6;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 275px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0px;
      color: #ffffff;
    }

    img {
      width: 26px;
      height: 14px;
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    div {
      width: 659px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: #ffffff;
      }

      img {
        width: 26px;
        height: 14px;
        margin-right: 20px;
      }
    }
  }
`;
