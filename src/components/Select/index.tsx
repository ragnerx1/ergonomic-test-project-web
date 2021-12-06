import React, { forwardRef } from 'react';

import { Container } from './styles';
import { ISelect } from './types';

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, ISelect> = ({ id, label, list, ...rest }, ref) => (
  <Container>
    <label className="label-select" htmlFor={id}>
      {label}
    </label>

    <select ref={ref} id={id} {...rest}>
      {list.concat({ id: '', name: `Selecionar ${label}`, form_id: '' }).map(value => (
        <option key={value.id} value={value.id}>
          {value.name}
        </option>
      ))}
    </select>
  </Container>
);

export default forwardRef(Select);
