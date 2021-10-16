/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Button from '../Button';
import { IModalDeleteCompany, IModalDeleteCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalDeleteCompany: React.ForwardRefRenderFunction<
  IModalDeleteCompanyActions,
  IModalDeleteCompany
> = ({ company }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`company/${company}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      handleVisibleModal();
    } catch (err: any) {
      toast.error('Não foi possivel excluir esta empresa');
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
          <h2>Excluir empresa</h2>
          <button type="button" onClick={handleVisibleModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir essa empresa?</p>

        <Button title="Excluir" onPress={handleDeleteCompany} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalDeleteCompany);
