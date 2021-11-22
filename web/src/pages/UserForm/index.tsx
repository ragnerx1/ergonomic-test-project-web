import React, { useRef } from 'react';

import QuestionTypeOne from '@components/QuestionTypeOne';
import QuestionTypeTwo from '@components/QuestionTypeTwo';
import QuestionTypeThree from '@components/QuestionTypeThree';
import ModalForm from '@components/ModalForm';
import { IModalFormActions } from '@components/ModalForm/types';
import { form } from './data';
import { Container } from './styles';

const UserForm: React.FC = () => {
  const modalRef = useRef<IModalFormActions>(null);

  return (
    <Container>
      <h1>user form</h1>

      {form.map(question => (
        <>
          {question.question_type === 1 && <QuestionTypeOne data={question} />}
          {question.question_type === 2 && <QuestionTypeTwo data={question} />}
          {question.question_type === 3 && (
            <QuestionTypeThree data={question} />
          )}
        </>
      ))}

      <ModalForm ref={modalRef} />
    </Container>
  );
};

export default UserForm;
