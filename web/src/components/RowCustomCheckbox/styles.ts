/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { variables } from '../../styles/variables';

interface IContainerProps {
  checked: boolean;
}

const buttonSize = 20;
const divSize = 14;

export const Container = styled.button<IContainerProps>`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: transparent;
  padding: 2px;

  div {
    width: ${divSize}px;
    height: ${divSize}px;
    background-color: ${({ checked }) => (checked ? variables.colors.blue_500 : variables.colors.white_500)};
    border-radius: 50%;
  }
`;
