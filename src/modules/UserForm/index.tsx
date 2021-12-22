import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import { useAuth } from '@hooks/auth';
import { useUser } from '@hooks/user';
import { ERoutes } from '@dtos/routes';
import ModalForm from './components/ModalForm';
import { IModalFormActions } from './components/ModalForm/types';
import { TUserForm, updateUserFormSchema } from './types';
import { Container } from './styles';

export const UserForm: React.FC = () => {
  const modalRef = useRef<IModalFormActions>(null);
  const { user } = useAuth();
  const { editUser } = useUser();
  const { register, formState, handleSubmit } = useForm<TUserForm>({ resolver: yupResolver(updateUserFormSchema) });
  const { push } = useHistory();

  const [gender, setGender] = useState('');

  useEffect(() => {
    if (user.register.name) push(ERoutes.ERGONOMIC_FORM);
  }, [user, push]);

  async function handleUpdateUser(data: TUserForm) {
    await editUser(user.register.id, {
      admin: user.register.admin,
      email: user.register.email,
      company_id: user.register.company_id,
      name: data.name,
      age: data.age,
      height: data.height,
      weight: data.weight,
      role: data.role,
      gender,
    });

    push(ERoutes.ERGONOMIC_FORM);
  }

  return (
    <Container>
      <h1>Titulo</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo id neque consequuntur magni omnis? Odit
        vel, cupiditate distinctio praesentium aut quo illo doloremque mollitia sint minus quas omnis ex?
      </p>

      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <Input id="name" label="Nome" error={formState.errors.name} {...register('name', { required: true })} />

        <Input id="role" label="Departamento" error={formState.errors.role} {...register('role', { required: true })} />

        <label htmlFor="role">Sexo</label>
        <Checkbox
          choice={{ id: 'masculino', choice: 'masculino' }}
          selectedAnswer={item => setGender(String(item))}
          disabled={false}
        />
        <Checkbox
          choice={{ id: 'feminino', choice: 'feminino' }}
          selectedAnswer={item => setGender(String(item))}
          disabled={false}
        />

        <Input id="age" label="Idade" error={formState.errors.age} {...register('age', { required: true })} />

        <Input
          id="weight"
          label="Peso"
          placeholder="Exemplo: '63.0'"
          error={formState.errors.weight}
          {...register('weight', { required: true })}
        />

        <Input
          id="height"
          label="Altura"
          placeholder="Exemplo: '1.80'"
          error={formState.errors.height}
          {...register('height', { required: true })}
        />

        <Button title="Continuar" type="submit" />
      </form>

      <ModalForm ref={modalRef} />
    </Container>
  );
};
