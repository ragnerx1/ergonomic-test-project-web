import React, { forwardRef } from 'react';

import { IInput } from './types';
import { Container } from './styles';

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { label, id, placeholder, error = null, ...rest },
  ref,
) => (
  <Container>
    <label className="label-input" htmlFor={id}>
      {label}
    </label>

    <input ref={ref} type="text" id={id} placeholder={placeholder} {...rest} />

    {!!error && <span>{error.message}</span>}
  </Container>
);

export default forwardRef(Input);
