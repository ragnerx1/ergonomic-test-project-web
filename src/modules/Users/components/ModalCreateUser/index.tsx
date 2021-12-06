import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUser } from '@hooks/user';
import { useCompany } from '@hooks/company';
import { IUser } from '@dtos/user';
import { SimpleCheckbox } from '@components/SimpleCheckbox';
import { HeaderModal } from '@components/HeaderModal';
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/Select';
import { IModalCreateUser, IModalCreateUserActions, createUserFormSchema, TCreateUserForm } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateUser: React.ForwardRefRenderFunction<IModalCreateUserActions, IModalCreateUser> = ({ user }, ref) => {
  const { createUser } = useUser();
  const { companies } = useCompany();
  const { register, handleSubmit, formState, reset } = useForm<TCreateUserForm>({
    resolver: yupResolver(createUserFormSchema),
  });

  const [isVisible, setIsVisible] = useState(false);
  const [admin, setAdmin] = useState(false);

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleVisibleModal() {
    reset();
    setAdmin(false);
    setIsVisible(oldValue => !oldValue);
  }

  async function handleCreateUser(data: TCreateUserForm) {
    const userData: Omit<IUser, 'id'> = {
      email: data.email,
      admin,
      company_id: data.company_id,
    };

    await createUser(userData);
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title={`${user ? 'Editar' : 'Criar'} usuário`} onClick={handleVisibleModal} />

        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Input id="email" label="Email" error={formState.errors.email} {...register('email', { required: true })} />

          <SimpleCheckbox
            id="admin"
            label="Usuário administrativo"
            checked={admin}
            onChange={() => setAdmin(oldValue => !oldValue)}
          />

          <Select id="companies" label="Empresa" list={companies} {...register('company_id')} />

          <Button title="Criar" type="submit" />
        </form>
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateUser);
