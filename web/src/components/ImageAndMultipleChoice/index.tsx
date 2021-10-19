import Button from '@components/Button';
import React, { useState } from 'react';

import { Container } from './styles';

const ImageAndMultipleChoice: React.FC = () => {
  const [image, setImage] = useState<any>();

  function handleCreateQuestion() {
    console.log(image);
  }

  return (
    <Container>
      <p>Escolher arquivo imagem:</p>
      <input
        type="file"
        name="file"
        style={{ color: 'black' }}
        onChange={e => setImage(e.target.files)}
      />

      <label htmlFor="description">Descricão da pergunta:</label>
      <input type="text" id="description" />

      <label htmlFor="answer1">Pergunta 1:</label>
      <input type="text" id="answer1" />

      <label htmlFor="answer2">Pergunta 2:</label>
      <input type="text" id="answer2" />

      <label htmlFor="answer3">Pergunta 3:</label>
      <input type="text" id="answer3" />

      <label htmlFor="answer4">Pergunta 4:</label>
      <input type="text" id="answer4" />

      <label htmlFor="correct-answer">resposta certa:</label>
      <input type="number" id="correct-answer" />

      <Button title="salvar" onPress={handleCreateQuestion} />
    </Container>
  );
};

export default ImageAndMultipleChoice;
