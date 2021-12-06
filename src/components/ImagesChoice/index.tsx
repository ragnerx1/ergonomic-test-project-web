import React, { FormEvent, useEffect, useState } from 'react';

import Button from '@components/Button';
import { useQuestion } from '@hooks/questions';
import { useForm } from '@hooks/form';
import { IImagesChoice } from './types';
import { Container } from './styles';

const ImagesChoice: React.FC<IImagesChoice> = ({ onClick }) => {
  const { createQuestion, updateImage } = useQuestion();
  const { getForms, forms } = useForm();

  const [image, setImage] = useState<any>();
  const [image2, setImage2] = useState<any>();
  const [image3, setImage3] = useState<any>();
  const [image4, setImage4] = useState<any>();
  const [formSelected, setFormSelected] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  async function handleCreateQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();
    data.append('image1', image[0]);
    data.append('image2', image2[0]);
    data.append('image3', image3[0]);
    data.append('image4', image4[0]);

    const response = await createQuestion({
      question_type: 3,
      description,
      form_id: formSelected,
    });

    if (response !== false && response !== true) {
      await updateImage(response, data);
    }

    onClick();
  }

  return (
    <Container onSubmit={handleCreateQuestion}>
      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" value={description} onChange={v => setDescription(v.target.value)} />

      <p>Escolher arquivo imagem:</p>
      <input type="file" name="file" style={{ color: 'black' }} onChange={e => setImage(e.target.files)} />

      <p>Escolher arquivo imagem:</p>
      <input type="file" name="file" style={{ color: 'black' }} onChange={e => setImage2(e.target.files)} />

      <p>Escolher arquivo imagem:</p>
      <input type="file" name="file" style={{ color: 'black' }} onChange={e => setImage3(e.target.files)} />

      <p>Escolher arquivo imagem:</p>
      <input type="file" name="file" style={{ color: 'black' }} onChange={e => setImage4(e.target.files)} />

      <label htmlFor="correct-answer">resposta certa:</label>
      <input type="number" id="correct-answer" />

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

export default ImagesChoice;
