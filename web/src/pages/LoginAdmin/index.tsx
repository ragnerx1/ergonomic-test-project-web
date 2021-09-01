import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const LoginAdmin: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <h1>Admin</h1>

      <form action="">
        <input type="email" />
        <input type="password" />
        <button type="submit" onClick={() => push('/home')}>
          Entrar
        </button>
      </form>
    </Container>
  );
};

export default LoginAdmin;
