import React, { FormEvent, useState } from 'react';

import Button from '@components/Button';
import { Container } from './styles';

const ImagesChoice: React.FC = () => {
  const [image, setImage] = useState<any>();

  function handleCreateQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(image);
  }

  return (
    <Container onSubmit={handleCreateQuestion}>
      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" />

      <p>Escolher arquivo imagem:</p>
      <input
        type="file"
        name="file"
        style={{ color: 'black' }}
        onChange={e => setImage(e.target.files)}
      />

      <p>Escolher arquivo imagem:</p>
      <input
        type="file"
        name="file"
        style={{ color: 'black' }}
        onChange={e => setImage(e.target.files)}
      />

      <p>Escolher arquivo imagem:</p>
      <input
        type="file"
        name="file"
        style={{ color: 'black' }}
        onChange={e => setImage(e.target.files)}
      />

      <p>Escolher arquivo imagem:</p>
      <input
        type="file"
        name="file"
        style={{ color: 'black' }}
        onChange={e => setImage(e.target.files)}
      />

      <label htmlFor="correct-answer">resposta certa:</label>
      <input type="number" id="correct-answer" />

      <Button title="Salvar" />
    </Container>
  );
};

export default ImagesChoice;
