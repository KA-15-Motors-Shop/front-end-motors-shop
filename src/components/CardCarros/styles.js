import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 23px;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 67px 0px 62px;

  h1 {
    color: #000000;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 60px 40px;
  }
`;

export const Wr = styled.div`
  overflow-x: auto;
  width: 100%;
  gap: 12px;
  display: flex;
  box-sizing: border-box;

  @media screen and (min-width: 1440px) {
    padding: 0 60px;
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
  width: 312px;
  height: 350px;
  flex-shrink: 0;
  display: flex;

  :first-child {
  }
`;

export const InfoSection = styled.div`
  width: 100%;

  div {
    h1 {
      padding-top: 16px;
      padding-bottom: 16px;
      font-family: 'Lexend';
      font-style: normal;
      font-weight: 600;
      color: #212529;
      font-size: 16px;
      line-height: 20px;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #495057;
      padding-bottom: 16px;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  background-color: #e9ecef;
  height: 152px;
  display: flex;
  justify-content: center;

  img {
    width: 262px;
    height: 150.28px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;

  div {
    width: 32px;
    height: 32px;
    background-color: #4529e6;
    border-radius: 150px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;
    margin-right: 8px;
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #495057;
  }
`;

export const AccessPage = styled.div`
  /* @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0px 24px;
  } */
`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
    color: #212529;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

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
