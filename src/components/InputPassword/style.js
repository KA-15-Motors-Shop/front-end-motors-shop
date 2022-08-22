import styled from 'styled-components';

export const ContainerPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    height: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #212529;

    > label {
    }
    > span {
      font-size: 12px;
      color: #ff0033;
    }
  }
`;

export const InputEye = styled.section`
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 38px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    text-indent: 10px;
    position: relative;

    ::placeholder {
      color: #868e96;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 0px;
    }
  }
  input:focus {
    border: 1px solid #000;
    color: #000;
  }

  input:focus::-webkit-input-placeholder {
    color: #000;
  }
  button {
    background: transparent;
    position: relative;
    top: ${({ style }) => (style ? '13px' : '3px')};
    right: 25px;
    > svg {
      color: #3492d4;
    }
  }
`;
