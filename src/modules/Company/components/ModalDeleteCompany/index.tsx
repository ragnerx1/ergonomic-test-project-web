import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { useCompany } from '@hooks/company';
import Button from '@components/Button';
import { HeaderModal } from '@components/HeaderModal';
import { IModalDeleteCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalDeleteCompany: React.ForwardRefRenderFunction<IModalDeleteCompanyActions> = (props, ref) => {
  const { deleteCompany, selectedcompany } = useCompany();

  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  async function handleDeleteCompany() {
    await deleteCompany(selectedcompany.id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Excluir empresa" onClick={handleVisibleModal} />

        <p>Tem certeza que deseja excluir essa empresa?</p>

        <Button title="Excluir" onPress={handleDeleteCompany} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalDeleteCompany);
