import styled from 'styled-components';

export const Container = styled.div`
  width: 226px;
  height: 202px;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  /* border-radius: 4px; */
  border-radius: 0 4px;
  position: absolute;
  top: 80px;
  right: 0px;
`;

export const Options = styled.div`
  padding: 21px;
  text-align: start;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #495057;
  ul {
    li {
      list-style-type: none;
      padding-bottom: 16px;
      cursor: pointer;

      :hover {
        color: #0b0d0d;
      }
    }
  }
`;
