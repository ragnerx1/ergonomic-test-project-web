import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Button from '../Button';
import api from '../../services/api';
import { IModalFormDelete, IModalFormDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalFormDelete: React.ForwardRefRenderFunction<
  IModalFormDeleteActions,
  IModalFormDelete
> = ({ company }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`forms/${company}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleVisibleModal();
    } catch (err: any) {
      toast.error('Não foi possivel excluir este formulário');
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
          <h2>Excluir formulário</h2>
          <button type="button" onClick={handleVisibleModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir esse formulário?</p>

        <Button title="Excluir" onPress={handleDeleteCompany} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalFormDelete);
