import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';
import { Container } from './styles';

const Login: React.FC = () => {
  const { push } = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await signIn({ email, password });
      push('/home');
    } catch (error) {
      toast.error('Algo deu errado!', { theme: 'dark' });
    }
  }

  return (
    <Container>
      <h1>Login</h1>

      <form onSubmit={handleAuth}>
        <input
          type="email"
          value={email}
          onChange={v => setEmail(v.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={v => setPassword(v.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};

export default Login;
