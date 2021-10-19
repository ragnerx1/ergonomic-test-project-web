import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { HeaderModal } from '@components/HeaderModal';
import { SelectQuestionType } from '@components/SelectQuestionType';
import ImageAndMultipleChoice from '@components/ImageAndMultipleChoice';
import { ICreateQuestionActions } from './types';
import { Container, Content } from './styles';

const ModalCreateQuestion: React.ForwardRefRenderFunction<ICreateQuestionActions> =
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [type, setType] = useState<number>(0);

    function handleVisibleModal() {
      setType(0);
      setIsVisible(oldValue => !oldValue);
    }

    useImperativeHandle(ref, () => ({ handleVisibleModal }));

    return (
      <Container open={isVisible}>
        <Content>
          <HeaderModal title="Criar perguntas" onClick={handleVisibleModal} />
          {type === 0 && (
            <SelectQuestionType selectQuestionType={id => setType(id)} />
          )}
          {type === 1 && <ImageAndMultipleChoice />}
        </Content>
      </Container>
    );
  };

export default forwardRef(ModalCreateQuestion);
