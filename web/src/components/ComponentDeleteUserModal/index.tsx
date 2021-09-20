/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import ComponentButton from '../ComponentButton';

import { Container, ContainerCreateData } from './styles';

interface Props {
  status: boolean;
  onPress(): void;
  user: string;
}

const ComponentDeleteUserModal: React.FC<Props> = ({
  status,
  onPress,
  user,
}) => {
  async function handleDeleteUser() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`register/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onPress();
    } catch (err: any) {
      toast.error('Não foi possivel deletar esse usuario');
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
          <h2>Excluir usuário</h2>
          <button type="button" onClick={onPress}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir essa usuário?</p>

        <ComponentButton
          title="Excluir"
          onPress={handleDeleteUser}
          color="red"
        />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentDeleteUserModal;
