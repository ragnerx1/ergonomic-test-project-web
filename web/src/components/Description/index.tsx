import React, { FormEvent, useState } from 'react';

import Button from '@components/Button';
import { Container } from './styles';

const Description: React.FC = () => {
  const [image, setImage] = useState<any>();

  function handleCreateQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(image);
  }

  return (
    <Container onSubmit={handleCreateQuestion}>
      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" />

      <Button title="Salvar" />
    </Container>
  );
};

export default Description;
