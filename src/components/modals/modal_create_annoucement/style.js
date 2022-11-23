import styled from 'styled-components';

export const Section = styled.form`
  max-height: calc(100vh - 105px);
  overflow-y: auto;
  position: absolute;
  top: 7%;
  bottom: 0;
  left: 35%;
  right: 0;
  width: 520px;
  height: 1036px;
  background-color: red;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 50px 24px 30px 24px;
  border-radius: 8px;
  background-color: #fff;
  z-index: 1000;
  border-radius: 0.5em;

  @media (max-width: 768px) {
    width: 346px;
    height: 1150px;
    padding: 0 15px 15px 15px;
  }
`;

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  top: 4.1rem;
  width: 477px;
  bottom: 0;
  position: fixed;
  background-color: #ffffff;
  overflow-x: hidden;
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const Titulo = styled.span`
  color: var(--grey1);
  font-size: 16px;
`;

export const Span = styled.span`
  color: #000;
  font-size: 14px;
  margin-bottom: 18px;
  margin-top: 24px;
  font-weight: 500;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  color: #000;
  font-size: 14px;
`;

export const Info = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 24px;
  font-weight: 500;
`;
export const TextArea = styled.textarea`
  color: var(--grey2);
  border: solid 1.5px var(--grey7);
  resize: none;
  padding: 10px 10px 0 25px;
  max-width: 100%;
  min-height: 66px;
  overflow-y: auto;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    width: 314px;
  }
`;

export const HorizontalDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 200px;
  }
`;
