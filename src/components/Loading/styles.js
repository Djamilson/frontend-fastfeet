import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`

to{
  transform: rotate(1turn);
}
`;

export const Spinner = styled.img`
  width: 50px;
  height: 50px;
`;

export const Container = styled.article`
  transform: scale(5);
  border: 1px solid #000;
  width: 50%;
  min-height: 70vh;
  position: absolute;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  height: auto;

  span {
    animation: ${rotate360} 1s linear infinite;
    border: 2.2px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #0066f9;
    height: 20px;
    width: 20px;
  }
`;
