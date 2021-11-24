import { lighten } from 'polished';
import styled from 'styled-components';

import { variables } from '../../styles/variables';

export const Container = styled.section`
  background-color: ${lighten(0.4, variables.colors.blue_500)};
  padding: 0 30vw;

  .image {
    background-color: ${variables.colors.white_500};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-top: 30px;
  }

  .choice {
    background-color: ${variables.colors.white_500};
    margin-top: 30px;
    border-radius: 7px;
    padding: 25px;

    p {
      font-weight: bold;
    }

    .legend {
      p {
        font-weight: normal;
      }

      margin-top: 50px;
      width: 60%;
      margin-left: auto;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
    }
  }

  @media (max-width: 700px) {
    & {
      padding: 0 10vw;
    }
  }
`;
