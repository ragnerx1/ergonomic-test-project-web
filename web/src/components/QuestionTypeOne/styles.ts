import styled from 'styled-components';

import { variables } from '../../styles/variables';

export const Container = styled.section`
  margin-top: 50px;
  background-color: ${variables.colors.white_500};
  padding: 20px;
  border-radius: 7px;

  .question-order {
    width: 90px;
    background-color: ${variables.colors.blue_500};
    color: ${variables.colors.white_500};
    padding: 5px;
    border-radius: 7px;
    font-size: ${variables.fontSize.small};
    margin-bottom: 15px;
  }

  .question-description {
    margin-bottom: 15px;
    font-size: 20px;
  }

  div {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px 10px;

    button {
      border: none;
      background-color: transparent;

      img {
        width: 380px;
        height: 260px;
        border-radius: 7px;

        &:hover {
          width: 390px;
          height: 270px;
          border-radius: 7px;
        }
      }
    }
  }
`;
