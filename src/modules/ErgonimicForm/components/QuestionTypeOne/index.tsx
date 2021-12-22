import React, { useState } from 'react';

import Answer from '@components/Answer';
import QuestionOrder from '@components/QuestionOrder';
import { IQuestion } from '@dtos/question';
import { IAnswerProps } from 'modules/ErgonimicForm/types';
import { Container } from './styles';

export interface IQuestionTypeOne {
  data: IQuestion;
  selectedAnswer(answer: IAnswerProps): void;
}

export const QuestionTypeOne: React.FC<IQuestionTypeOne> = ({ data, selectedAnswer }) => {
  const questionNUmber = data.id + 1;

  const [answer, setAnswer] = useState('');

  function handleChoicceImage(answerSelected: number) {
    selectedAnswer({ id: questionNUmber, answer: answerSelected });

    switch (answerSelected) {
      case 1:
        setAnswer(data.first_answer!);
        break;
      case 2:
        setAnswer(data.second_answer!);
        break;
      case 3:
        setAnswer(data.third_answer!);
        break;
      case 4:
        setAnswer(data.fourth_answer!);
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <QuestionOrder questionNumber={questionNUmber} />

      <p className="question-description">{data.description}</p>

      <div className="images">
        <button type="button" disabled={!!answer.length} onClick={() => handleChoicceImage(1)}>
          <img src={data.first_photo} alt="laptop bed" />
        </button>

        <button type="button" disabled={!!answer.length} onClick={() => handleChoicceImage(2)}>
          <img src={data.second_photo} alt="laptop sofa" />
        </button>

        {data.third_photo && (
          <button type="button" disabled={!!answer.length} onClick={() => handleChoicceImage(3)}>
            <img src={data.third_photo} alt="laptop kitchen" />
          </button>
        )}

        {data.fourth_photo && (
          <button type="button" disabled={!!answer.length} onClick={() => handleChoicceImage(4)}>
            <img src={data.fourth_photo} alt="laptop kitchen" />
          </button>
        )}
      </div>

      {answer && <Answer answer={answer} />}
    </Container>
  );
};
