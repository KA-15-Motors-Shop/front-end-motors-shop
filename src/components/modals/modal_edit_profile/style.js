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

export const Section = styled.section`
  width: 520px;
  height: 830px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 346px;
    height: 850px;
    padding: 15px 15px 15px 15px;
  }
`;

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 36px;
`;

export const WrapperForm = styled.div`
  padding-top: 24px;
  color: #000000;
  width: 450px;
`;

export const Titulo = styled.span`
  color: var(--grey1);
  font-size: 16px;
  width: 450px;
`;

export const Span = styled.span`
  color: var(--grey1);
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 24px;
  font-weight: 500;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 6px;
`;

export const VerticalDiv = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  color: #000;
  font-size: 14px;
`;

export const Info = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 24px;
  font-weight: 500;
`;

export const HorizontalDiv = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 170px;
  }
`;
