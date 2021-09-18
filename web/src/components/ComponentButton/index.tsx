/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onPress: () => void;
  title: string;
  color?: string;
}

const ComponentButton: React.FC<Props> = ({
  onPress,
  title,
  color,
  ...rest
}) => (
  <Container onClick={onPress} style={{ backgroundColor: color }} {...rest}>
    {title}
  </Container>
);

export default ComponentButton;
