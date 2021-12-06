/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useEffect, useState } from 'react';

import Button from '@components/Button';
import { useQuestion } from '@hooks/questions';
import { useForm } from '@hooks/form';
import { IImageAndMultipleChoiceProps } from './types';
import { Container } from './styles';

const ImageAndMultipleChoice: React.FC<IImageAndMultipleChoiceProps> = ({ onClick }) => {
  const { createQuestion, updateImage } = useQuestion();
  const { getForms, forms } = useForm();

  const [image, setImage] = useState<any>();
  const [description, setDescription] = useState('');
  const [answerFirst, setAnswerFirst] = useState('');
  const [answerSecond, setAnswerSecond] = useState('');
  const [answerThird, setAnswerThird] = useState('');
  const [answerFourth, setAnswerFourth] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [formSelected, setFormSelected] = useState('');

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  async function handleCreateQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();
    data.append('image1', image[0]);

    const response = await createQuestion({
      description,
      question_type: 1,
      answer_fist: answerFirst,
      answer_second: answerSecond,
      answer_third: answerThird,
      answer_fourth: answerFourth,
      answer_correct: answerCorrect,
      active: true,
      form_id: formSelected,
    });

    if (response !== false && response !== true) {
      await updateImage(response, data);
    }

    onClick();
  }

  return (
    <Container onSubmit={handleCreateQuestion}>
      <p>Escolher arquivo imagem:</p>
      <input type="file" name="file" style={{ color: 'black' }} onChange={e => setImage(e.target.files)} />

      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" value={description} onChange={v => setDescription(v.target.value)} />

      <label htmlFor="answer1">Pergunta 1:</label>
      <input type="text" id="answer1" value={answerFirst} onChange={v => setAnswerFirst(v.target.value)} />

      <label htmlFor="answer2">Pergunta 2:</label>
      <input type="text" id="answer2" value={answerSecond} onChange={v => setAnswerSecond(v.target.value)} />

      <label htmlFor="answer3">Pergunta 3:</label>
      <input type="text" id="answer3" value={answerThird} onChange={v => setAnswerThird(v.target.value)} />

      <label htmlFor="answer4">Pergunta 4:</label>
      <input type="text" id="answer4" value={answerFourth} onChange={v => setAnswerFourth(v.target.value)} />

      <label htmlFor="correct-answer">Resposta certa:</label>
      <input type="number" id="correct-answer" value={answerCorrect} onChange={v => setAnswerCorrect(v.target.value)} />

      <label htmlFor="admin">Formulários</label>
      <select name="companies" id="admin" value={formSelected} onChange={e => setFormSelected(e.target.value)}>
        {forms.map(form => (
          <option key={form.id} value={form.id}>
            {form.name}
          </option>
        ))}
      </select>

      <Button title="Salvar" />
    </Container>
  );
};

export default ImageAndMultipleChoice;
