import React from 'react';

import { IButton } from './types';
import { Container } from './styles';

const Button: React.FC<IButton> = ({ onPress, title, color, type, ...rest }) => (
  <Container onClick={onPress} style={{ backgroundColor: color }} type={type} {...rest}>
    {title}
  </Container>
);

export default Button;
