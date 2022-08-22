import styled from 'styled-components';

export const Container = styled.header`
  height: 703px;
  background-color: var(--brand-1);

  @media screen and (min-width: 1024px) {
    height: 583px;
  }
`;

export const MobileIcon = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
    position: absolute;
    top: 1rem;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 748px;
  align-items: center;

  h1 {
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
    line-height: 40px;
    padding: 53px 0px 53px 0px;
    color: var(--brand-4);
  }

  p {
    color: var(--grey9);
    line-height: 28px;
    padding-bottom: 52px;
  }

  div {
    button {
      height: 48px;
      font-weight: 600;
      font-size: 1rem;
      color: var(--grey10);
      padding: 12px 28px;
      width: 351px;
      background-color: var(--brand-1);
      border: 1.5px solid #fdfdfd;
      border-radius: 4px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    div {
      display: flex;
      button {
        width: 177.53px;
        margin-right: 20px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 44px;
      padding: 80px 0px 20px 0px;
      line-height: 56px;
      font-weight: 700;
    }

    div {
      button {
        width: 177.53px;
        margin-right: 20px;
      }
    }
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleDesc = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  @media screen and (min-width: 425px) {
    max-width: 580px;
  }

  @media screen and (min-width: 768px) {
    max-width: 580px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`;
