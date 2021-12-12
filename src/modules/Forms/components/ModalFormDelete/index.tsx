import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { useForms } from '@hooks/form';
import Button from '@components/Button';
import { HeaderModal } from '@components/HeaderModal';
import { IModalFormDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalFormDelete: React.ForwardRefRenderFunction<IModalFormDeleteActions> = (props, ref) => {
  const { deleteForm, selectedForm } = useForms();
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  async function handleDeleteCompany() {
    await deleteForm(selectedForm.id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Excluir formulário" onClick={handleVisibleModal} />

        <p>Tem certeza que deseja excluir esse formulário?</p>

        <Button title="Excluir" onPress={handleDeleteCompany} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalFormDelete);
