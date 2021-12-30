import React from 'react';

import { QuestionTypeDiscomfort } from './components/QuestionTypeDiscomfort';
import { choices } from './data';
import { Container } from './styles';

export const DiscomfortMap: React.FC = () => (
  <Container>
    <h1>Mapa de Desconforto</h1>

    <p>
      Tomando como base a escala progressiva de desconforto/dor, assinale na tabela o número correspondente na área do
      corpo com base na imagem 3- o desconforto permanece durante o dia 4- precisei procurar um médico ou tomar
      medicação receitada
    </p>
    <p>1- o desconforto some quando paro a atividade</p>
    <p>2- o desconforto permanece por alguns minutos após a atividade</p>
    <p>3- o desconforto permanece durante o dia</p>
    <p>4- precisei procurar um médico ou tomar medicação receitada</p>

    <div className="image">
      <img
        src="https://lh3.googleusercontent.com/s3xwClL4ucqbnv08-sdNF-qsfrWwx-TtjQEEURHhn7kfaCZSs6Aih_pUE4eZh5HpETXQO-zLXmranLonTHp7Bgd-Blpe5-wJZovfKS4t4ATQDrbcDv59lJ8n8F7lfeMHSQ=w254"
        alt="Mapa de descomforto"
      />
    </div>

    <div className="choice">
      <p>Assinale a região onde sente desconforto (com base na imagem) e o grau deste:</p>

      <div className="legend">
        <p>0</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>

      <QuestionTypeDiscomfort data={choices} />
    </div>
  </Container>
);
