import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const Container = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCreateData = styled.div`
  width: 500px;
  background-color: white;
  padding: 15px;

  form {
    margin: 30px 0;
  }
`;
