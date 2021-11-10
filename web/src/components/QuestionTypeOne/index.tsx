import QuestionOrder from '@components/QuestionOrder';
import React from 'react';

import { Container } from './styles';
import { IQuestionTypeOne } from './types';

const QuestionTypeOne: React.FC<IQuestionTypeOne> = ({ data }) => (
  <Container>
    <QuestionOrder questionNumber={data.id + 1} />

    <p className="question-description">{data.description}</p>

    <div className="images">
      <button type="button">
        <img src={data.first_photo} alt="laptop bed" />
      </button>

      <button type="button">
        <img src={data.second_photo} alt="laptop sofa" />
      </button>

      {data.third_photo && (
        <button type="button">
          <img src={data.third_photo} alt="laptop kitchen" />
        </button>
      )}

      {data.fourth_photo && (
        <button type="button">
          <img src={data.fourth_photo} alt="laptop kitchen" />
        </button>
      )}
    </div>
  </Container>
);

export default QuestionTypeOne;
