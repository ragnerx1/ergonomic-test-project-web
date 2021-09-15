import React from 'react';

import { Container } from './styles';

interface Props {
  onPress: () => void;
  title: string;
  color?: string;
}

const ComponentButton: React.FC<Props> = ({ onPress, title, color }) => (
  <Container onClick={onPress} style={{ backgroundColor: color }}>
    {title}
  </Container>
);

export default ComponentButton;
