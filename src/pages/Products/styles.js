import styled from 'styled-components';

export const ContainerProduct = styled.div`
  display: flex;
  width: 100%;
  /* padding-top: 45px;
  margin-top: -500px; */
  flex-direction: row;
  align-items: flex-start;
  gap: 45px;
  justify-content: center;

  img {
    width: 293.97px;
    height: 252.96px;
  }

  @media screen and (min-width: 1025px) {
    img {
      width: 440px;
    }
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 17px;
  width: 351px;
  height: 355px;
  background-color: white;
  align-items: center;
  border-radius: 4px;
  flex-direction: column;

  :first-child {
    height: 100%;
    padding-left: 28px;
    padding-right: 40px;
    display: flex;
    align-items: center;
  }

  :nth-child(2) {
    height: 326px;
  }

  :nth-child(3) {
    height: 325px;
  }

  :nth-child(4) {
    height: 359px;
    padding: 0 44px;
    h1 {
      font-size: 20px;
      margin-bottom: 24px;
      text-align: start;
      width: 100%;
      font-family: 'Lexend';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #212529;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #495057;
    }
  }

  @media screen and (min-width: 1025px) {
    width: 752px;
    height: 230px;

    :first-child {
      height: 315px;
    }

    :nth-child(2) {
      height: 239.39px;
    }

    :nth-child(3) {
      height: 213px;
    }
  }
`;

export const Background = styled.div`
  height: 516px;
  background-color: #4529e6;
`;

export const Card = styled.div`
  margin-bottom: 30px;
`;

export const CommentWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 28px;
  padding-right: 41px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  margin-bottom: 17px;
  width: 351px;
  color: #495057;
  border-radius: 4px;

  @media screen and (min-width: 1025px) {
    width: 752px;
    padding-left: 44px;
    padding-right: 44px;
  }
`;

export const CommentBox = styled.div`
  width: 100%;
  position: relative;
  padding-left: 28px;
  padding-right: 41px;

  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-left: 28px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
  }

  button {
    right: 0;
    width: 128px;
    height: 38px;
    background-color: #4529e6;
    color: #ffffff;
    margin-right: 11px;
    margin-top: 24px;
  }

  form {
    height: 128px;
  }

  @media screen and (min-width: 1025px) {
    padding-left: 44px;
    padding-right: 44px;

    button {
      position: absolute;
      right: 0;
      width: 128px;
      height: 38px;
      background-color: #4529e6;
      color: #ffffff;
      margin-top: 77px;
      margin-right: 51px;
    }

    textarea {
      padding-right: 145px;
    }
  }
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  gap: 8px;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #212529;
  }
`;

export const UserCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 30px;
  background-color: #e34d8c;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  :nth-child(2) {
    width: 32px;
  }
`;

// export const ImgWrapper = styled.div`
//   height: 315px;
//   background-color: #ffffff;
//   margin-bottom: 17px;
//   display: flex;
//   justify-content: center;
//   border-radius: 4px;
// `;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 752px;
`;

export const Box2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f4;

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

export const As = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  width: 351px;

  @media screen and (min-width: 1025px) {
    width: 440px;
  }
`;

export const BoxAside = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17px;
  height: 359px;

  @media screen and (min-width: 1025px) {
    width: 440px;
    margin-bottom: 34px;
    height: 377px;
    border-radius: 4px;
  }
`;

export const Owner = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17px;
  height: 359px;

  @media screen and (min-width: 1025px) {
    width: 440px;
    margin-bottom: 34px;
    height: 377px;
    border-radius: 4px;
  }
`;

export const SellerName = styled.h1`
  margin-bottom: 28px;
  margin-top: 28px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212529;
`;

export const SellerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 28px;
  align-items: center;

  button {
    width: 206px;
    height: 48px;
    padding: 12px, 28px, 12px, 28px;
    gap: 10px;
    border-radius: 4px;
    background-color: #0b0d0d;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #ffffff;
  }

  p {
    margin-bottom: 28px;
    color: #495057;
    width: 352px;
    text-align: center;
  }

  @media screen and (min-width: 1025px) {
    p {
      text-align: center;
    }
  }
`;

export const Circle = styled.div`
  height: 77px;
  width: 77px;
  background-color: #4529e6;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 26.6538px;
  line-height: 39px;
`;

export const Buyer = styled.div``;

export const Teste = styled.div`
  background-color: #f1f3f5;
  width: 100%;
`;

export const Box1 = styled.div`
  display: flex;
  margin-top: -460px;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    gap: 46px;
  }
`;

export const Boxx = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f1f3f4;
  padding-bottom: 73px;
`;

export const Boxx3 = styled.div`
  @media screen and (min-width: 1025px) {
    width: 1238px;
  }
`;

export const TagBox = styled.div`
  width: 100%;
  padding: 36px 44px 36px 44px;

  h1 {
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const YearAndKm = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 12px;

  div {
    width: 50px;
    height: 32px;
    display: flex;
    border-radius: 4px;
    color: #4529e6;
    align-items: center;
    justify-content: center;
    background-color: #edeafd;
  }
`;

export const Price = styled.div`
  height: 26px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #212529;
  margin-bottom: 24px;
`;

export const BuyBtn = styled.button`
  height: 38px;
  width: 100px;
  background-color: #4529e6;
  padding: 12px 20px;
  gap: 10px;
  border: 1.5px solid #4529e6;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 0px;
`;

export const WrBottom = styled.div`
  width: 100%;
`;

export const PhTitle = styled.div`
  width: 281px;
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #212529;
`;

export const PhotosBox = styled.div`
  width: 281px;
  height: 230px;
  display: flex;
  gap: 5.5px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 32px;

  div {
    width: 90px;
    height: 90px;
    background-color: #e9ecef;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 36px 44px 36px 44px;
  height: 250px;

  h2 {
    margin-bottom: 32px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #212529;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
  }
`;
