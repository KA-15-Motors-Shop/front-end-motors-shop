import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabCont = styled.div`
  width: 100%;
  height: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #212529;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 100%;

  > input {
    width: 100%;
    height: 48px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    text-indent: 10px;

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
  > div {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;

    > label {
      font-size: 15px;
    }
    > span {
      font-size: 12px;
      color: #ff0033;
    }
  }
`;
