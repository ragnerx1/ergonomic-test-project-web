import React from 'react';

import QuestionOrder from '@components/QuestionOrder';
import { Container } from './styles';
import { IQuestionTypeThree } from './types';

const QuestionTypeThree: React.FC<IQuestionTypeThree> = ({ data }) => (
  <Container>
    <QuestionOrder questionNumber={data.id + 1} />

    <p className="question-description">{data.description}</p>

    <div className="image">
      <img src={data.first_photo} alt="" />
    </div>

    {data.multiple_choice?.map(choice => (
      <div className="choice">
        <input type="checkbox" id="choice" name="choice" checked />
        <label htmlFor="choice">{choice.choice}</label>
      </div>
    ))}
  </Container>
);

export default QuestionTypeThree;
