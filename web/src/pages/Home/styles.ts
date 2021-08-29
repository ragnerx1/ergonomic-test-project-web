import { darken } from 'polished';
import styled from 'styled-components';

import { ButtonCardProps } from './types';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  section {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: grid;
      grid-template-columns: auto auto auto;

      @media only screen and (max-width: 600px) {
        & {
          display: flex;
          flex-direction: column;
          margin-top: 150px;
        }
      }
    }
  }
`;

export const ButtonCard = styled.button<ButtonCardProps>`
  width: 250px;
  height: 150px;
  border: none;
  margin: 15px;
  border-radius: 5px;
  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${({ color }) => darken(0.05, color)};
  }

  p {
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
  }
`;
