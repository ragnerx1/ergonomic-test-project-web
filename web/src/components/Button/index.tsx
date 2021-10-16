import React from 'react';

import { IButton } from './types';
import { Container } from './styles';

const Button: React.FC<IButton> = ({ onPress, title, color, ...rest }) => (
  <Container onClick={onPress} style={{ backgroundColor: color }} {...rest}>
    {title}
  </Container>
);

export default Button;
