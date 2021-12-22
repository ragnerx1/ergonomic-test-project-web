import React, { useState } from 'react';

import QuestionOrder from '@components/QuestionOrder';
import Checkbox from '@components/Checkbox';
import Answer from '@components/Answer';
import { IQuestion } from '@dtos/question';
import { IAnswerProps } from 'modules/ErgonimicForm/types';
import { Container } from './styles';

export interface IQuestionTypeThree {
  data: IQuestion;
  selectedAnswer(answer: IAnswerProps): void;
}

export const QuestionTypeThree: React.FC<IQuestionTypeThree> = ({ data, selectedAnswer }) => {
  const questionNUmber = data.id + 1;

  const [answer, setAnswer] = useState('');

  function handleChooseAnswer(answerSelected: number) {
    selectedAnswer({ id: questionNUmber, answer: answerSelected });

    switch (answerSelected) {
      case 0:
        setAnswer(data.first_answer!);
        break;
      case 1:
        setAnswer(data.second_answer!);
        break;
      case 2:
        setAnswer(data.third_answer!);
        break;
      case 3:
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

      <div className="image">
        <img src={data.first_photo} alt="" />
      </div>

      {data.multiple_choice?.map(choice => (
        <Checkbox
          key={choice.id}
          disabled={!!answer}
          choice={choice}
          selectedAnswer={id => handleChooseAnswer(Number(id))}
        />
      ))}

      {answer && <Answer answer={answer} />}
    </Container>
  );
};
