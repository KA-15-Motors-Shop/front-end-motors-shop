import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f1f3f5;
  justify-content: center;
  min-height: calc(100vh - 80px - 140px);
`;

export const ContainerLogin = styled.div`
  background-color: #ffffff;
  width: 343px;
  height: 542px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 412px;
  }
`;

export const Cont = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  flex-direction: column;
  width: 287px;
  height: 392px;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    width: 316px;
    height: 392px;
  }
`;

export const WrTitle = styled.div`
  width: 287px;

  @media screen and (min-width: 1024px) {
    width: 316px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  :first-child {
    margin-bottom: 24px;
  }

  input {
    height: 48px;
    width: 100%;
    padding: 0px 16px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    gap: 10px;

    ::placeholder {
      color: #868e96;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 0px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    margin-left: 140px;
    padding-top: 9px;

    span {
      color: #495057;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 8px;
    color: #212529;
  }

  @media screen and (min-width: 1024px) {
    div {
      margin-left: 172px;
    }
  }
`;

export const Title = styled.div`
  h1 {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }
`;

export const EnterBtn = styled.button`
  border: 1.5px solid #4529e6;
  background: #4529e6;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  width: 100%;
  height: 48px;

  margin-top: 13px;
  margin-bottom: 24px;
`;

export const SignInBtn = styled(LinkR)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  width: 100%;
  height: 48px;
  border: 1.5px solid #adb5bd;
  border-radius: 4px;
  color: #0b0d0d;
  margin-top: 24px;
`;

export const Question = styled.div`
  margin: 0 auto;

  span {
    padding-bottom: unset;
  }
`;
