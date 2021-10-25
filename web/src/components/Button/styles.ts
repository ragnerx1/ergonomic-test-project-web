import { darken } from '@material-ui/core';
import styled from 'styled-components';

import { variables } from '../../styles/variables';

export const Container = styled.button`
  margin-left: auto;
  background-color: ${variables.colors.blue_500};
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${darken(variables.colors.blue_500, 0.2)};
  }
`;
