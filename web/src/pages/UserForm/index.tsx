import React from 'react';
import QuestionTypeOne from '@components/QuestionTypeOne';
import { Container } from './styles';
import { form } from './data';

const UserForm: React.FC = () => (
  <Container>
    <h1>user form</h1>

    {form.map(
      question =>
        question.question_type === 1 && <QuestionTypeOne data={question} />,
    )}
  </Container>
);

export default UserForm;
