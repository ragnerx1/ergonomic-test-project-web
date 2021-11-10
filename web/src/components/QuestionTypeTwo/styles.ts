import styled from 'styled-components';

import { variables } from '../../styles/variables';

export const Container = styled.section`
  margin-top: 50px;
  background-color: ${variables.colors.white_500};
  padding: 20px;
  border-radius: 7px;

  .question-description {
    margin-bottom: 15px;
    font-size: 20px;
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