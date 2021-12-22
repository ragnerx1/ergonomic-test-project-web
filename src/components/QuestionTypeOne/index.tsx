import React, { useState } from 'react';

import Answer from '@components/Answer';
import QuestionOrder from '@components/QuestionOrder';
import { IQuestion } from '@dtos/question';
import { Container } from './styles';

export interface IQuestionTypeOne {
  data: IQuestion;
  selectedAnswer(number: number): void;
}

export const QuestionTypeOne: React.FC<IQuestionTypeOne> = ({ data, selectedAnswer }) => {
  const [answer, setAnswer] = useState('');

  function handleChoicceImage(number: 1 | 2 | 3 | 4) {
    selectedAnswer(number);

    switch (number) {
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
      <QuestionOrder questionNumber={data.id + 1} />

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
