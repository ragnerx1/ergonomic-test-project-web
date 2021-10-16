import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { HeaderModal } from '@components/HeaderModal';
import { SelectQuestionType } from '@components/SelectQuestionType';
import { ICreateQuestionActions } from './types';
import { Container, Content } from './styles';

const ModalCreateQuestion: React.ForwardRefRenderFunction<ICreateQuestionActions> =
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    function handleVisibleModal() {
      setIsVisible(oldValue => !oldValue);
    }

    useImperativeHandle(ref, () => ({ handleVisibleModal }));

    return (
      <Container open={isVisible}>
        <Content>
          <HeaderModal title="Criar perguntas" onClick={handleVisibleModal} />
          <SelectQuestionType />
        </Content>
      </Container>
    );
  };

export default forwardRef(ModalCreateQuestion);
