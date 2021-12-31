import React from 'react';

import { Container } from './styles';

interface IPercentageBar {
  percentage: number;
}

export const PercentageBar: React.FC<IPercentageBar> = ({ percentage }) => (
  <Container percentage={percentage * 3}>
    <div className="bar" />
  </Container>
);
