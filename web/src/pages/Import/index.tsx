import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';

import { Container } from './styles';

const Import: React.FC = () => (
  <Container>
    <ComponentHeader buttomBack />
    <input type="file" name="file" style={{ color: 'black' }} />
  </Container>
);

export default Import;
