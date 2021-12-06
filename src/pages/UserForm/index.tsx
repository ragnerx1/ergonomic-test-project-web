import React from 'react';
import { useHistory } from 'react-router-dom';

import QuestionTypeOne from '@components/QuestionTypeOne';
import QuestionTypeTwo from '@components/QuestionTypeTwo';
import QuestionTypeThree from '@components/QuestionTypeThree';
import Button from '@components/Button';
import { form } from './data';
import { Container } from './styles';

const UserForm: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <h1>user form</h1>

      {form.map(question => (
        <div key={question.id}>
          {question.question_type === 1 && <QuestionTypeOne data={question} />}
          {question.question_type === 2 && <QuestionTypeTwo data={question} />}
          {question.question_type === 3 && <QuestionTypeThree data={question} />}
        </div>
      ))}

      <Button title="Continuar" onClick={() => push('/discomfort-map')} style={{ marginTop: 50, marginBottom: 15 }} />
    </Container>
  );
};

export default UserForm;
