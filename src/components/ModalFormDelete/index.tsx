import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useForm } from '@hooks/form';
import Button from '../Button';
import { IModalFormDelete, IModalFormDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalFormDelete: React.ForwardRefRenderFunction<
  IModalFormDeleteActions,
  IModalFormDelete
> = ({ company }, ref) => {
  const { deleteForm } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteCompany() {
    await deleteForm(company.id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
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
