import styled from 'styled-components';

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

export const Form = styled.form`
  width: 520px;
  height: 760px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 24px 30px 24px;
  justify-content: space-evenly;
  border-radius: 8px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 346px;
    height: 620px;
    padding: 15px 15px 15px 15px;
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
`;

export const Titulo = styled.span`
  color: var(--grey1);
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const Span = styled.span`
  color: var(--grey1);
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 24px;
  font-weight: 500;
`;

export const Div = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const VerticalDiv = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 72px;
  color: #000;
  font-size: 14px;
`;

export const Info = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 24px;
  font-weight: 500;
`;
export const TextArea = styled.textarea`
  color: var(--grey2);
  border: solid 1.5px var(--grey7);
  padding: 15px 10px;
  width: 466px;
  height: 100px;

  @media (max-width: 768px) {
    width: 314px;
  }
`;

export const HorizontalDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const H4 = styled.h4`
  color: var(--grey1);
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`;
