/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import ComponentButton from '../ComponentButton';

import { Container, ContainerCreateData } from './styles';

interface Props {
  status: boolean;
  onPress(): void;
  company?: string;
}

const ComponentCreateUserModal: React.FC<Props> = ({
  status,
  onPress,
  company,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (company) {
      setName(company);
    }
  }, [company]);

  async function handleCreateCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');

      await api.post(
        'company',
        { name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      onPress();
    } catch (err) {
      toast.error('Erro ao criar empresa!');
    }
  }

  return (
    <Container
      open={status}
      onClose={onPress}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ContainerCreateData>
        <section className="header">
          <h2>Criar usuário</h2>
          <button type="button" onClick={onPress}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <form action="">
          <label htmlFor="name">E-mail da usuário</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </form>

        <ComponentButton
          title={company ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentCreateUserModal;
