import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 60px;
  overflow-x: auto;
  width: 100%;
  gap: 24px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 312px;
  height: 350px;
  flex-shrink: 0;
  background-color: red;
  display: flex;

  :first-child {
  }
`;

export const InfoSection = styled.div``;

export const AccessPage = styled.div`
  /* @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0px 24px;
  } */
`;
