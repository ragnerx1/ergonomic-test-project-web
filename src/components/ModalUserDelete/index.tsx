import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useRegister } from '@hooks/register';
import Button from '../Button';
import { IModalUserDelete, IModalUserDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalUserDelete: React.ForwardRefRenderFunction<
  IModalUserDeleteActions,
  IModalUserDelete
> = ({ user }, ref) => {
  const { deleteRegister } = useRegister();

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteUser() {
    await deleteRegister(user.id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
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
