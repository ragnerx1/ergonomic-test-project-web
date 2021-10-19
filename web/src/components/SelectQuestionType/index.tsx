import React from 'react';

import { questionTypes } from './data';
import { Container } from './styles';
import { ISelectQuestionType } from './types';

const SelectQuestionType: React.FC<ISelectQuestionType> = ({
  selectQuestionType,
}) => (
  <Container>
    {questionTypes.map(question => (
      <button
        type="button"
        key={question.id}
        onClick={() => selectQuestionType(question.id)}
      >
        <question.icon size={30} />
        {question.title}
      </button>
    ))}
  </Container>
);

export { SelectQuestionType };
