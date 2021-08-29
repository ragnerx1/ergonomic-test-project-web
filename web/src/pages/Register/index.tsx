import React from 'react';
import ComponentHeader from '../../components/ComponentHeader';

import { Container } from './styles';

const Register: React.FC = () => (
  <Container>
    <ComponentHeader buttomBack />

    <section>
      <h2>Cadastrar usuário</h2>

      <form action="">
        <label htmlFor="email">
          Email
          <input type="email" id="email" />
        </label>

        <label htmlFor="password">
          Senha
          <input type="password" id="password" />
        </label>

        <label htmlFor="password">
          Confirmar senha
          <input type="password" id="password" />
        </label>

        <label htmlFor="checkbox">
          Usuário administrador
          <input type="checkbox" id="checkbox" />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  </Container>
);

export default Register;
