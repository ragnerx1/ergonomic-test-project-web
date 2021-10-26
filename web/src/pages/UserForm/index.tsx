/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import QuestionImageAndMultipleChoice from '@components/QuestionImageAndMultipleChoice';
import { useAuth } from '@hooks/auth';
import { useQuestion } from '@hooks/questions';
import { IQuestion } from '@hooks/questions/types';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const UserForm: React.FC = () => {
  const { getQuestionsByForm } = useQuestion();
  const { user } = useAuth();

  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    getQuestionsByForm(user.company.form_id).then(response => setQuestions(response));
  }, [getQuestionsByForm, user]);

  return (
    <Container>
      <h1>user form</h1>

      {questions.map(question => (
        <QuestionImageAndMultipleChoice data={question} key={question.id} />
      ))}
    </Container>
  );
};

export default UserForm;
