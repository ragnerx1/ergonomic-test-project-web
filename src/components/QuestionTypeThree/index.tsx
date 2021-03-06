import React, { useState } from 'react';

import QuestionOrder from '@components/QuestionOrder';
import Checkbox from '@components/Checkbox';
import Answer from '@components/Answer';
import { Container } from './styles';
import { IQuestionTypeThree } from './types';

const QuestionTypeThree: React.FC<IQuestionTypeThree> = ({ data }) => {
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

      <div className="image">
        <img src={data.first_photo} alt="" />
      </div>

      {data.multiple_choice?.map(choice => (
        <Checkbox
          key={choice.id}
          disabled={!!answer}
          choice={choice}
          selectedAnswer={id => handleChooseAnswer(id)}
        />
      ))}

      {answer && <Answer answer={answer} />}
    </Container>
  );
};

export default QuestionTypeThree;
