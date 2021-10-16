import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import ComponentButton from '../ComponentButton';

import { ICompanentDeleteFormModal } from './types';
import { Container, ContainerCreateData } from './styles';

const CompanentDeleteFormModal: React.FC<ICompanentDeleteFormModal> = ({
  status,
  onPress,
  company,
}) => {
  async function handleDeleteCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      await api.delete(`forms/${company}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onPress();
    } catch (err: any) {
      toast.error('Não foi possivel excluir este formulário');
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
          <h2>Excluir formulário</h2>
          <button type="button" onClick={onPress}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <p>Tem certeza que deseja excluir esse formulário?</p>

        <ComponentButton
          title="Excluir"
          onPress={handleDeleteCompany}
          color="red"
        />
      </ContainerCreateData>
    </Container>
  );
};

export default CompanentDeleteFormModal;
