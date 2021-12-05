import { variables } from '@styles/variables';
import styled from 'styled-components';

export const Container = styled.div`
  .label-input {
    margin-top: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #f7f7f7;
    margin: 10px 0;
    padding: 10px;
  }

  span {
    color: red;
    font-size: ${variables.fontSize.little}px;
  }
`;
