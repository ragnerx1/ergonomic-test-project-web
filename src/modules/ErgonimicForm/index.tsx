import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@components/Button';
import { ERoutes } from '@dtos/routes';
import { useAuth } from '@hooks/auth';
import { useResearch } from '@hooks/researches';
import { QuestionTypeOne } from './components/QuestionTypeOne';
import { QuestionTypeTwo } from './components/QuestionTypeTwo';
import { QuestionTypeThree } from './components/QuestionTypeThree';
import { form } from './data';
import { IAnswerProps } from './types';
import { Container } from './styles';

export const ErgonomicForm: React.FC = () => {
  const { push } = useHistory();
  const { registerResearch } = useResearch();
  const { user } = useAuth();

  const [answers, setAnwsers] = useState<any>();

  function registerNewAnswer({ id, answer }: IAnswerProps) {
    const newAnswerRegisters = { ...answers, [`question_${id}`]: answer };
    setAnwsers(newAnswerRegisters);
  }

  async function handleRegisterResearch() {
    const formattedResearch = { ...answers, user_id: user.register.id, form_id: user.company.form_id };

    await registerResearch(formattedResearch);
    push(ERoutes.DISCOMFORT_MAP);
  }

  return (
    <Container>
      <h1>user form</h1>

      {form.map(question => (
        <div key={question.id}>
          {question.question_type === 1 && (
            <QuestionTypeOne data={question} selectedAnswer={answer => registerNewAnswer(answer)} />
          )}
          {question.question_type === 2 && (
            <QuestionTypeTwo data={question} selectedAnswer={answer => registerNewAnswer(answer)} />
          )}
          {question.question_type === 3 && (
            <QuestionTypeThree data={question} selectedAnswer={answer => registerNewAnswer(answer)} />
          )}
        </div>
      ))}

      <Button title="Continuar" onClick={handleRegisterResearch} style={{ marginTop: 50, marginBottom: 15 }} />
    </Container>
  );
};
