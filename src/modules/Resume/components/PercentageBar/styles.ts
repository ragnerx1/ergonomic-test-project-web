import styled from 'styled-components';

import { variables } from '@styles/variables';

interface IContainer {
  percentage: number;
}

export const Container = styled.div<IContainer>`
  margin-top: 10px;
  width: 300px;
  height: 30px;
  border: 1px solid ${variables.colors.black_500};
  border-radius: 5px;

  .bar {
    width: ${({ percentage }) => percentage}px;
    height: 28px;
    background-color: ${variables.colors.blue_500};
    border-radius: 4px;
  }
`;
