import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useUser } from '@hooks/user';
import Button from '@components/Button';
import { IModalUserDelete, IModalUserDeleteActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalDeleteUser: React.ForwardRefRenderFunction<IModalUserDeleteActions, IModalUserDelete> = ({ user }, ref) => {
  const { deleteUser } = useUser();

  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  async function handleDeleteUser() {
    await deleteUser(user.id);
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

export default forwardRef(ModalDeleteUser);
