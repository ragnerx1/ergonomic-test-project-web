import React from 'react';

import { ISimpleCheckbox } from './types';
import { Container } from './styles';

export const SimpleCheckbox: React.FC<ISimpleCheckbox> = ({
  id,
  label,
  checked,
  onChange,
}) => (
  <Container>
    <label className="label-checkbox" htmlFor={id}>
      {label}
    </label>

    <input
      className="checkbox"
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
  </Container>
);
