import styled from 'styled-components';

import { variables } from '@styles/variables';

export const Container = styled.section`
  margin-top: 30px;
  background-color: ${variables.colors.white_500};
  padding: 20px;
  border-radius: 7px;

  .question-description {
    margin-bottom: 15px;
    font-size: 20px;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 0.5px solid black;
    border-radius: 7px;
    margin-bottom: 20px;

    img {
      width: 450px;
      height: 350px;
    }
  }

  div {
    input {
      margin-right: 15px;
    }

    label {
      font-size: ${variables.fontSize.small};
    }
  }
`;
