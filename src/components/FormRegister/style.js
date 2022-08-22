import styled from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  width: 343px;
  height: 1630px;
  margin-top: 46px;
  margin-bottom: 97px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background-color: #ffffff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 287px;
    height: 1432px;
    border-radius: 20px;
    padding-top: 24px;

    > section {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > button {
        width: 265px;
        height: 38px;
        border-radius: 4px;
        background: var(--color-primary-2);
        color: white;
        margin-bottom: 20px;
        transition: background 0.5s;
      }
      > button:hover {
        background: var(--color-primary-3);
      }
    }
  }

  @media (min-width: 1024px) {
    width: 411px;

    form {
      width: 315px;
    }
  }
`;

export const SideBySide = styled.div`
  display: flex;
  gap: 9px;

  input {
    width: 139px;
  }

  @media (min-width: 1024px) {
    gap: 11px;

    input {
      width: 152px;
    }
  }
`;

export const AccountBtn = styled.div`
  margin-bottom: 28px;
  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    padding-bottom: 28px;
  }

  div {
    width: 100%;

    button {
      width: 139px;
      height: 48px;
      border-radius: 4px;
      padding: 12px 28px 12px 28px;
      background-color: #4529e6;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 0px;
      color: #ffffff;

      :first-child {
        margin-right: 9px;
      }

      :nth-child(2) {
        border: 1.5px solid #adb5bd;
        border-radius: 4px;
        background-color: transparent;
        color: #0b0d0d;
      }
    }
  }

  @media (min-width: 1024px) {
    div {
      button {
        width: 152px;

        :first-child {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 287px;
  align-items: flex-start;

  > h4 {
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  span {
    margin-top: 32px;
  }

  @media (min-width: 1024px) {
    width: 315px;
  }
`;
