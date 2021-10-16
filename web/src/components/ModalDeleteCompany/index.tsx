/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Button from '../Button';
import { IModalDeleteCompany } from './types';
import { Container, ContainerCreateData } from './styles';

const ComponentDeleteCompanyModal: React.FC<IModalDeleteCompany> = ({
  status,
  onPress,
  company,
}) => {
  async function handleDeleteCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`company/${company}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onPress();
    } catch (err: any) {
      toast.error('Não foi possivel excluir esta empresa');
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
          <h2>Excluir empresa</h2>
          <button type="button" onClick={onPress}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir essa empresa?</p>

        <Button title="Excluir" onPress={handleDeleteCompany} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentDeleteCompanyModal;
