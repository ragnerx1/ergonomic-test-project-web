import React, { forwardRef, useImperativeHandle, useState } from 'react';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { HeaderModal } from '@components/HeaderModal';
import Button from '@components/Button';
import Input from '@components/Input';
import { useForms } from '@hooks/form';
import { formatISO } from 'date-fns';
import { createFormSchema, IModalCreateFormActions, TCreateForm } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateForm: React.ForwardRefRenderFunction<IModalCreateFormActions> = (props, ref) => {
  const { createForm } = useForms();
  const { register, handleSubmit, formState, reset } = useForm<TCreateForm>({
    resolver: yupResolver(createFormSchema),
  });

  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleVisibleModal() {
    reset();
    setIsVisible(oldValue => !oldValue);
  }

  async function handleCreateForm(data: TCreateForm) {
    const [initialDay, initialMonth, initialYear] = data.initialDate.split('/');
    const [finalDay, finalMonth, finalYear] = data.finalDate.split('/');

    const initialDate = formatISO(new Date(Number(initialYear), Number(initialMonth), Number(initialDay)));
    const finalDate = formatISO(new Date(Number(finalYear), Number(finalMonth), Number(finalDay)));

    await createForm({ name: data.name, initial_date: initialDate, final_date: finalDate });
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Criar formulário" onClick={handleVisibleModal} />

        <form onSubmit={handleSubmit(handleCreateForm)}>
          <Input id="name" label="Nome do formulário" {...register('name')} error={formState.errors.name} />

          <label htmlFor="initial-date">Data de inicio</label>
          <InputMask mask="99/99/9999" className="input-date" id="initial-date" {...register('initialDate')} />

          <label htmlFor="final-date">Data final</label>
          <InputMask mask="99/99/9999" className="input-date" id="final-date" {...register('finalDate')} />

          <Button title="Salvar" type="submit" />
        </form>
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateForm);
