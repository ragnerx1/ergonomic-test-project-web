import React from 'react';

import QuestionTypeOne from '@components/QuestionTypeOne';
import QuestionTypeTwo from '@components/QuestionTypeTwo';
import QuestionTypeThree from '@components/QuestionTypeThree';
import { form } from './data';
import { Container } from './styles';

const UserForm: React.FC = () => (
  <Container>
    <h1>user form</h1>

    {form.map(question => (
      <>
        {question.question_type === 1 && <QuestionTypeOne data={question} />}
        {question.question_type === 2 && <QuestionTypeTwo data={question} />}
        {question.question_type === 3 && <QuestionTypeThree data={question} />}
      </>
    ))}
  </Container>
);

export default UserForm;
