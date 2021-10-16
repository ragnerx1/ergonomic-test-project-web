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
  company?: string;
}

const ComponentDeleteCompanyModal: React.FC<Props> = ({
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

        <ComponentButton
          title="Excluir"
          onPress={handleDeleteCompany}
          color="red"
        />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentDeleteCompanyModal;