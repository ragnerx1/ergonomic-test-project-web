import React from 'react';

import { questionTypes } from './data';
import { Container } from './styles';

const SelectQuestionType: React.FC = () => {
  function handleSelectQuestionType(type: number) {
    console.log(type);
  }

  return (
    <Container>
      {questionTypes.map(question => (
        <button
          type="button"
          key={question.id}
          onClick={() => handleSelectQuestionType(question.id)}
        >
          <question.icon size={30} />
          {question.title}
        </button>
      ))}
    </Container>
  );
};

export { SelectQuestionType };
