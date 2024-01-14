import styled from 'styled-components';

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
