import React from 'react';

import { IColunmLarge } from './types';
import { Container } from './styles';

export const ColumnLarge: React.FC<IColunmLarge> = ({ children, backgroundColor }) => (
  <Container style={{ backgroundColor }}>{children}</Container>
);
