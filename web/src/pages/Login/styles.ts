import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
      background-color: #ebebeb;
      border-radius: 5px;
      border: none;
      padding: 10px;
      font-size: 20px;
    }

    button {
      background-color: #2c8fed;
      color: #fff;
      border: none;
      height: 45px;
      border-radius: 5px;
      margin-top: 15px;
      font-weight: bold;
      font-size: 20px;

      &:hover {
        background-color: ${darken(0.05, '#2c8fed')};
      }
    }
  }
`;
