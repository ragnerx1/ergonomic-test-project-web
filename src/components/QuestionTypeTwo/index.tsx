import React, { useState } from 'react';

import QuestionOrder from '@components/QuestionOrder';
import Checkbox from '@components/Checkbox';
import Answer from '@components/Answer';
import { Container } from './styles';
import { IQuestionTypeTwo } from './types';

const QuestionTypeTwo: React.FC<IQuestionTypeTwo> = ({ data }) => {
  const [answer, setAnswer] = useState('');

  function handleChooseAnswer(number: number) {
    switch (number) {
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
      <QuestionOrder questionNumber={data.id + 1} />

      <p className="question-description">{data.description}</p>

      {data.multiple_choice?.map(choice => (
        <Checkbox
          choice={choice}
          selectedAnswer={id => handleChooseAnswer(Number(id))}
          key={choice.id}
          disabled={!!answer}
        />
      ))}

      {answer && <Answer answer={answer} />}
    </Container>
  );
};

export default QuestionTypeTwo;
