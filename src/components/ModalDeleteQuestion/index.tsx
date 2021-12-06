import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { useQuestion } from '@hooks/questions';
import { HeaderModal } from '@components/HeaderModal';
import Button from '../Button';
import { IModalDeleteQuestion, IIModalDeleteQuestionActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalDeleteDelete: React.ForwardRefRenderFunction<IIModalDeleteQuestionActions, IModalDeleteQuestion> = (
  { question },
  ref,
) => {
  const { deleteQuestion } = useQuestion();

  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  async function handleDeleteQuestion() {
    await deleteQuestion(question.id!);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Excluir pergunta" onClick={handleVisibleModal} />

        <p>Tem certeza que deseja excluir essa pergunta?</p>

        <Button title="Excluir" onPress={handleDeleteQuestion} color="red" />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalDeleteDelete);
