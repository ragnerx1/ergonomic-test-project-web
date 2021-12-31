import React from 'react';

import { CheckboxGroup } from '@components/CheckboxGroup';
import { IAnswerProps } from 'modules/ErgonimicForm/types';
import { Container } from './styles';

export interface IQuestionTypeDiscomfort {
  data: {
    id: number;
    description: string;
  }[];
  selectedAnswer(answer: IAnswerProps): void;
}

export const QuestionTypeDiscomfort: React.FC<IQuestionTypeDiscomfort> = ({ data, selectedAnswer }) => (
  <Container>
    {data.map((choice, index) => (
      <div key={choice.id} className="choice-container">
        <p>{choice.description}</p>

        <div>
          <CheckboxGroup selectedAnswer={answer => selectedAnswer({ id: index + 1, answer })} />
        </div>
      </div>
    ))}
  </Container>
);
