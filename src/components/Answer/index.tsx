import React from 'react';

import { IAnswer } from './types';
import { Container } from './styles';

const Answer: React.FC<IAnswer> = ({ answer }) => (
  <Container>
    <div className="answer-box">
      <p className="answer-text">Resposta</p>
    </div>

    <p>{answer}</p>
  </Container>
);

export default Answer;
