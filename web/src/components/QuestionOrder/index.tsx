import React from 'react';

import { Container } from './styles';
import { IQuestionOrder } from './types';

const QuestionOrder: React.FC<IQuestionOrder> = ({ questionNumber }) => (
  <Container>
    <p>Pergunta {questionNumber}</p>
  </Container>
);

export default QuestionOrder;
