import { darken } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.button`
  margin-left: auto;
  background-color: #4b9e1f;
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${darken('#4b9e1f', 0.2)};
  }
`;
