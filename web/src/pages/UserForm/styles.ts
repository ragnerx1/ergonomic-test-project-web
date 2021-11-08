import styled from 'styled-components';
import { lighten } from 'polished';

import { variables } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${lighten(0.4, variables.colors.blue_500)};
  padding: 0 30vw;
`;
