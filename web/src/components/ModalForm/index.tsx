import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { HeaderModal } from '@components/HeaderModal';
import Button from '@components/Button';
import { IModalFormActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalForm: React.ForwardRefRenderFunction<IModalFormActions> = (
  props,
  ref,
) => {
  const [isVisible, setIsVisible] = useState(true);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Titulo" onClick={handleVisibleModal} />

        <p>
          Os participantes levam em média <strong>10 minutos</strong> para
          responder à esta avaliação.
        </p>

        <p>
          Por gentileza tire um tempo para responde-la de uma vez. Algumas
          questōes, uma vez respondidas, não permite correção. Então, tenha em
          mente que você está tirando um tempo para o auto-cuidado com seu
          corpo, o que você tem de mais importante, refletindo em como está sua
          postura ao utilizar equipamentos como notebook e celular na maior
          parte do tempo profissional e no lazer.
        </p>

        <p className="final-text">Venha descobrir!!!!!!!</p>

        <Button
          title="Continuar"
          onClick={handleVisibleModal}
          style={{ marginTop: 30 }}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalForm);
