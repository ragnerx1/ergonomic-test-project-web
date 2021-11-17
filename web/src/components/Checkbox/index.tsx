import React, { useState } from 'react';

import { Container } from './styles';
import { ICheckbox } from './types';

const Checkbox: React.FC<ICheckbox> = ({
  choice,
  selectedAnswer,
  disabled,
}) => {
  const [checked, setChecked] = useState(false);

  function handleChooseAnswer() {
    setChecked(oldValue => !oldValue);
    selectedAnswer(choice.id);
  }

  return (
    <Container className="choice">
      <input
        type="checkbox"
        disabled={disabled}
        id="choice"
        name="choice"
        checked={checked}
        onChange={e => handleChooseAnswer()}
      />
      <label htmlFor="choice">{choice.choice}</label>
    </Container>
  );
};

export default Checkbox;
