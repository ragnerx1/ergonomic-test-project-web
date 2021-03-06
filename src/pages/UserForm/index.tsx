import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import QuestionTypeOne from '@components/QuestionTypeOne';
import QuestionTypeTwo from '@components/QuestionTypeTwo';
import QuestionTypeThree from '@components/QuestionTypeThree';
import ModalForm from '@components/ModalForm';
import Button from '@components/Button';
import { IModalFormActions } from '@components/ModalForm/types';
import { form } from './data';
import { Container } from './styles';

const UserForm: React.FC = () => {
  const { push } = useHistory();
  const modalRef = useRef<IModalFormActions>(null);

  return (
    <Container>
      <h1>user form</h1>

      {form.map(question => (
        <div key={question.id}>
          {question.question_type === 1 && <QuestionTypeOne data={question} />}
          {question.question_type === 2 && <QuestionTypeTwo data={question} />}
          {question.question_type === 3 && (
            <QuestionTypeThree data={question} />
          )}
        </div>
      ))}

      <Button
        title="Continuar"
        onClick={() => push('/discomfort-map')}
        style={{ marginTop: 50, marginBottom: 15 }}
      />

      <ModalForm ref={modalRef} />
    </Container>
  );
};

export default UserForm;
