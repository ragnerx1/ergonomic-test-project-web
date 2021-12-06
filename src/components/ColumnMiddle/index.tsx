import React from 'react';

import { IColunmMiddle } from './types';
import { Container } from './styles';

export const ColumnMiddle: React.FC<IColunmMiddle> = ({ children, backgroundColor }) => (
  <Container style={{ backgroundColor }}>{children}</Container>
);
