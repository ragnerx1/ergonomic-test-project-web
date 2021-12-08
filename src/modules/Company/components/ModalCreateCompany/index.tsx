import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@components/Button';
import Input from '@components/Input';
import { HeaderModal } from '@components/HeaderModal';
import { useCompany } from '@hooks/company';
import { useForms } from '@hooks/form';
import Select from '@components/Select';
import { IModalCreateCompanyActions, TCreateCompanyForm, createCompanyFormSchema } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateCompany: React.ForwardRefRenderFunction<IModalCreateCompanyActions> = (props, ref) => {
  const { createCompany } = useCompany();
  const { getForms, forms } = useForms();
  const { register, handleSubmit, formState, reset } = useForm<TCreateCompanyForm>({
    resolver: yupResolver(createCompanyFormSchema),
  });

  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  function handleVisibleModal() {
    reset();
    setIsVisible(oldValue => !oldValue);
  }

  async function handleCreateCompany(data: TCreateCompanyForm) {
    await createCompany(data.name, data.formId);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Criar empresa" onClick={handleVisibleModal} />

        <form onSubmit={handleSubmit(handleCreateCompany)}>
          <Input
            id="name"
            label="Nome da empresa"
            error={formState.errors.name}
            {...register('name', { required: true })}
          />

          <Select id="forms" label="Formulários" list={forms} {...register('formId')} />

          <Button title="Salvar" type="submit" />
        </form>
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateCompany);
