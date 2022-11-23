import styled from 'styled-components';

export const InputStyle = styled.input`
  :focus {
    border: 2px solid #55555578;
  }
  width: ${(props) =>
    typeof props.width == 'number' ? props.width + 'px' : props.width};
  color: ${(props) => props.color};
  height: ${(props) =>
    typeof props.height === 'number' ? props.height + 'px' : props.height};
  border: ${(props) =>
    props.border_color === 'none'
      ? 'none'
      : 'solid ' + props.border_color + ' ' + props.border_width + 'px'};

  background-color: ${(props) => props.background};
  border-radius: ${(props) =>
    typeof props.border_radius === 'number'
      ? props.border_radius + 'px'
      : props.border_radius};
  font-size: ${(props) =>
    typeof props.fonte === 'number' ? props.fonte + 'px' : props.fonte};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  @media (max-width: 768px) {
    width: ${(props) =>
      typeof props.width_mobile === 'number'
        ? props.width_mobile + 'px'
        : props.width_mobile};
    height: ${(props) =>
      typeof props.height_mobile === 'number'
        ? props.height_mobile + 'px'
        : props.height_mobile};
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${(props) =>
    typeof props.padding_bottom === 'number'
      ? props.padding_bottom + 'px'
      : props.padding_bottom};

  /* :last-child {
    padding-bottom: 30px;
  } */
`;

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
  display: ${(props) => props.display};
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 100%;

  ::placeholder {
    color: #868e96;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
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
export const StyledError = styled.div`
  height: 20px;
  margin-top: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  display: ${(props) => props.merda};

  > label {
    font-size: 15px;
  }
  > span {
    font-size: 12px;
    color: #ff577f;
  }
`;
