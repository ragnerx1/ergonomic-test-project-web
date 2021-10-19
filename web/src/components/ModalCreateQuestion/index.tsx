import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { HeaderModal } from '@components/HeaderModal';
import { SelectQuestionType } from '@components/SelectQuestionType';
import ImageAndMultipleChoice from '@components/ImageAndMultipleChoice';
import MultipleChoice from '@components/MultipleChoice';
import ImagesChoice from '@components/ImagesChoice';
import Description from '@components/Description';
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
          {type === 2 && <MultipleChoice />}
          {type === 3 && <ImagesChoice />}
          {type === 4 && <Description />}
        </Content>
      </Container>
    );
  };

export default forwardRef(ModalCreateQuestion);
