import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Button from '../Button';

import { IModalUserDelete, IModalUserDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalUserDelete: React.ForwardRefRenderFunction<
  IModalUserDeleteActions,
  IModalUserDelete
> = ({ user }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteUser() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`register/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleVisibleModal();
    } catch (err: any) {
      toast.error('Não foi possivel deletar esse usuario');
    }
  }

  return (
    <Container
      open={isVisible}
      onClose={handleVisibleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ContainerCreateData>
        <section className="header">
          <h2>Excluir usuário</h2>
          <button type="button" onClick={handleVisibleModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir essa usuário?</p>

        <Button title="Excluir" onPress={handleDeleteUser} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalUserDelete);
