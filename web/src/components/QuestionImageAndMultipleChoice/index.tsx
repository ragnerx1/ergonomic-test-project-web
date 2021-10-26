import React from 'react';

import { Container } from './styles';
import { IQuestionImageAndMultipleChoice } from './types';

const QuestionImageAndMultipleChoice: React.FC<IQuestionImageAndMultipleChoice> =
  ({ data }) => (
    <Container>
      <h2>{data.description}</h2>
      <img src={data.photo_url_first} alt="" />
    </Container>
  );

export default QuestionImageAndMultipleChoice;
