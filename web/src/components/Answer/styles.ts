import { lighten } from 'polished';
import styled from 'styled-components';
import { variables } from '../../styles/variables';

export const Container = styled.div`
  margin-top: 20px;
  background-color: ${lighten(0.53, variables.colors.blue_500)};
  padding: 10px;
  border-radius: 7px;

  .answer-box {
    background-color: #e5872a;
    width: 95px;
    padding: 5px;
    margin-bottom: 15px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: ${variables.colors.white_500};
    }
  }
`;
