import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import { Container } from './styles';

const GetInfoUser: React.FC = () => {
  const { push } = useHistory();

  return (
    <Container>
      <h1>Titulo</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo
        id neque consequuntur magni omnis? Odit vel, cupiditate distinctio
        praesentium aut quo illo doloremque mollitia sint minus quas omnis ex?
      </p>

      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />

        <label htmlFor="role">Departamento</label>
        <input type="text" id="role" />

        <label htmlFor="role">Sexo</label>
        <Checkbox
          choice={{ id: 0, choice: 'masculino' }}
          selectedAnswer={item => item}
          disabled={false}
        />
        <Checkbox
          choice={{ id: 1, choice: 'feminino' }}
          selectedAnswer={item => item}
          disabled={false}
        />

        <label htmlFor="age">Idade</label>
        <input type="text" id="age" />

        <label htmlFor="weight">Peso</label>
        <input type="text" id="weight" />

        <label htmlFor="height">Altura</label>
        <input type="text" id="height" />

        <Button title="Continuar" onClick={() => push('/user-form')} />
      </form>
    </Container>
  );
};

export default GetInfoUser;
