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
  form?: string;
  id: string | undefined;
}

const ComponentModalCreateForm: React.FC<Props> = ({
  status,
  onPress,
  form,
  id,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (form) {
      setName(form);
    }
  }, [form]);

  function handleCloseModal() {
    setName('');
    onPress();
  }

  async function handleCreateCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      if (id) {
        await api.put(
          `forms/${id}`,
          { name },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
      } else {
        await api.post(
          'forms',
          { name, active: true },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      handleCloseModal();
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
          <h2>Criar formulário</h2>
          <button type="button" onClick={handleCloseModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <form action="">
          <label htmlFor="name">Nome do formulário</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </form>

        <ComponentButton
          title={form ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentModalCreateForm;
