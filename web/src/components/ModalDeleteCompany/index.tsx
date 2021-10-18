import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useCompany } from '@hooks/company';
import Button from '../Button';
import { IModalDeleteCompany, IModalDeleteCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalDeleteCompany: React.ForwardRefRenderFunction<
  IModalDeleteCompanyActions,
  IModalDeleteCompany
> = ({ company }, ref) => {
  const { deleteCompany } = useCompany();

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteCompany() {
    await deleteCompany(company.id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
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
