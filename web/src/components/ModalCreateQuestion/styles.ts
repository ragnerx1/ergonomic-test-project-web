import { Modal } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  overflow: scroll;
  width: 600px;
  height: 450px;
  background-color: white;
  padding: 15px;

  form {
    margin: 40px 0;

    input {
      width: 100%;
      height: 40px;
      border: none;
      background-color: #f7f7f7;
      margin-top: 10px;
      padding: 10px;
    }
  }
`;
