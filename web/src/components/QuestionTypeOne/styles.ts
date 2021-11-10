import styled from 'styled-components';

import { variables } from '../../styles/variables';

export const Container = styled.section`
  margin-top: 30px;
  background-color: ${variables.colors.white_500};
  padding: 20px;
  border-radius: 7px;

  .question-description {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .images {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px 10px;

    button {
      border: none;
      background-color: transparent;

      img {
        border: 0.5px solid black;
        width: 95%;
        height: 95%;
        border-radius: 7px;

        &:hover {
          width: 96%;
          height: 96%;
          border-radius: 7px;
        }
      }
    }
  }
`;
