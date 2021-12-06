import { Modal } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCreateData = styled.div`
  width: 500px;
  height: 250px;
  background-color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  form {
    margin: 20px 0;
  }
`;
