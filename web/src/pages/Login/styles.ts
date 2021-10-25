import { darken } from 'polished';
import styled from 'styled-components';
import { variables } from '../../styles/variables';

const imageSize = 250;
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: ${imageSize}px;
    height: ${imageSize}px;
    margin-bottom: 20px;
  }

  h1 {
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;

    input {
      width: 100%;
      height: 45px;
      margin-top: 15px;
      background-color: ${variables.colors.white_400};
      border-radius: 5px;
      border: none;
      padding: 10px;
      font-size: 20px;
    }

    button {
      background-color: ${variables.colors.blue_500};
      color: ${variables.colors.white_500};
      border: none;
      height: 45px;
      border-radius: 5px;
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;

      &:hover {
        background-color: ${darken(0.05, variables.colors.blue_500)};
      }
    }
  }
`;
