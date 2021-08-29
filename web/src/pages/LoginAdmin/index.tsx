import React from 'react';

import { Container } from './styles';

const LoginAdmin: React.FC = () => (
  <Container>
    <h1>Admin</h1>

    <form action="">
      <input type="email" />
      <input type="password" />
      <button type="submit">Entrar</button>
    </form>
  </Container>
);

export default LoginAdmin;
