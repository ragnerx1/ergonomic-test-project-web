import React, { FormEvent, useEffect, useState } from 'react';

import Button from '@components/Button';
import { useForms } from '@hooks/form';
import { useQuestion } from '@hooks/questions';
import { IDescriptionProps } from './types';
import { Container } from './styles';

const Description: React.FC<IDescriptionProps> = ({ onClick }) => {
  const { getForms, forms } = useForms();
  const { createQuestion } = useQuestion();

  const [description, setDescription] = useState('');
  const [formSelected, setFormSelected] = useState('');

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  async function handleCreateQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createQuestion({
      question_type: 4,
      description,
      form_id: formSelected,
      active: true,
    });

    onClick();
  }

  return (
    <Container onSubmit={handleCreateQuestion}>
      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" value={description} onChange={v => setDescription(v.target.value)} />

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

export default Description;
