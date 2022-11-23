import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  width: 100%;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
  /* position: ${({ togglee }) => (togglee ? 'relative' : 'fixed')}; */
`;

export const BackgroundColor = styled.div`
  height: 357px;
  background-color: #4529e6;
  width: 100%;
`;

export const UserInfo = styled.div`
  margin-top: -282px;
  width: 100%;
  height: 327px;
  display: flex;
  justify-content: center;
  color: black;

  @media screen and (min-width: 1024px) {
    height: 406px;
  }
`;

export const WhiteWrapper = styled.div`
  width: 343px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 41px;
  border-radius: 4px;

  button {
    width: 160px;
    border: 1.5px solid #4529e6;
    height: 48px;
    color: #4529e6;
    background-color: transparent;
  }

  span {
    padding: 24px 0;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    width: 170px;
    color: #212529;
  }

  p {
    padding-bottom: 39px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #495057;
  }

  @media screen and (min-width: 1024px) {
    width: 1240px;
  }
`;

export const Wrapper = styled.div`
  background-color: #f1f3f5;
`;

export const TypeAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  div {
    width: 92px;
    height: 32px;
    background-color: #edeafd;
    color: #4529e6;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Circle = styled.div`
  background-color: #4529e6;
  height: 104px;
  width: 104px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 104px;
  color: #ffffff;
`;
