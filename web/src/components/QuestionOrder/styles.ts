import styled from 'styled-components';
import { variables } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${variables.colors.blue_500};
  width: 95px;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  P {
    color: ${variables.colors.white_500};
    font-size: ${variables.fontSize.small}px;
  }
`;
