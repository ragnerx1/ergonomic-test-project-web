import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  section {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      color: black;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 400px;

      label {
        color: black;
        margin-top: 20px;
      }

      input {
        width: 100%;
        height: 45px;
        margin-top: 5px;
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
        margin-top: 25px;
        font-weight: bold;
        font-size: 20px;

        &:hover {
          background-color: ${darken(0.05, '#2c8fed')};
        }
      }
    }
  }
`;
