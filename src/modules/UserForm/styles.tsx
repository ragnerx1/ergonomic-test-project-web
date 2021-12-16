import styled from 'styled-components';
import { lighten } from 'polished';

import { variables } from '../../styles/variables';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${lighten(0.4, variables.colors.blue_500)};
  padding: 0 30vw;
  padding-top: 50px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: ${variables.colors.white_500};
    padding: 30px;
    border-radius: 7px;

    label {
      margin-top: 20px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 720px) {
    & {
      padding: 0 10vw;
    }
  }
`;
