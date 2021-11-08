import React from 'react';

import { Container } from './styles';
import { IQuestionTypeOne } from './types';

const QuestionTypeOne: React.FC<IQuestionTypeOne> = ({ data }) => (
  <Container>
    <section key={data.id}>
      <p className="question-order">Pergunta {data.id + 1}</p>

      <p className="question-description">{data.description}</p>

      <div>
        <button type="button">
          <img src={data.first_photo} alt="laptop bed" />
        </button>

        <button type="button">
          <img src={data.second_photo} alt="laptop sofa" />
        </button>

        <button type="button">
          <img src={data.third_photo} alt="laptop kitchen" />
        </button>

        <button type="button">
          <img src={data.fourth_photo} alt="laptop office" />
        </button>
      </div>
    </section>
  </Container>
);

export default QuestionTypeOne;
