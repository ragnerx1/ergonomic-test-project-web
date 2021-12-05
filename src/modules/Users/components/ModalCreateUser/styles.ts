import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCreateData = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  padding: 15px;

  form {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
  }
`;
