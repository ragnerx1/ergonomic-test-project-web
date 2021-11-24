import React from 'react';

import RowCustomCheckbox from '@components/RowCustomCheckbox';
import { IQuestionTypeDiscomfort } from './types';
import { Container } from './styles';

const QuestionTypeDiscomfort: React.FC<IQuestionTypeDiscomfort> = ({
  data,
}) => (
  <Container>
    {data.map(choice => (
      <div key={choice.id} className="choice-container">
        <p>{choice.description}</p>

        <div>
          <RowCustomCheckbox />
        </div>
      </div>
    ))}
  </Container>
);

export default QuestionTypeDiscomfort;
