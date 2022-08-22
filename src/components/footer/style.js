import styled from 'styled-components';

export const DivFooter = styled.div`
  background: var(--grey0);
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 310.34px;
  }
`;

export const Span = styled.span`
  color: var(--whitefixed);
`;
