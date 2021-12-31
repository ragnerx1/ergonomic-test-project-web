import { useAuth } from '@hooks/auth';
import React from 'react';
import { PercentageBar } from './components/PercentageBar';

import { Container } from './styles';

export const Resume: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <section className="header-resume">
        <h2>Aqui está o resumo do seu teste {user.register.name}</h2>
      </section>

      <section className="porcentage-bar">
        <h3>Porcentagem de </h3>

        <PercentageBar percentage={50} />
      </section>
    </Container>
  );
};
