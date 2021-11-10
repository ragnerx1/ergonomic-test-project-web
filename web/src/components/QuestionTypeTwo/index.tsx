import React from 'react';

import QuestionOrder from '@components/QuestionOrder';
import { Container } from './styles';
import { IQuestionTypeTwo } from './types';

const QuestionTypeTwo: React.FC<IQuestionTypeTwo> = ({ data }) => (
  <Container>
    <QuestionOrder questionNumber={data.id + 1} />

    <p className="question-description">{data.description}</p>

    {data.multiple_choice?.map(choice => (
      <div className="choice">
        <input type="checkbox" id="choice" name="choice" checked />
        <label htmlFor="choice">{choice.choice}</label>
      </div>
    ))}
  </Container>
);

export default QuestionTypeTwo;
