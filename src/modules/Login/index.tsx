import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isAfter, isBefore } from 'date-fns';

import Input from '@components/Input';
import { useAuth } from '@hooks/auth';
import { useForms } from '@hooks/form';
import { ERoutes } from '@dtos/routes';
import logo from '../../assets/logo.png';
import { TLoginForm, createLoginFormSchema } from './types';
import { Container } from './styles';

export const Login: React.FC = () => {
  const { push } = useHistory();
  const { signIn } = useAuth();
  const { getFormById } = useForms();
  const { register, handleSubmit, formState } = useForm<TLoginForm>({
    resolver: yupResolver(createLoginFormSchema),
  });

  async function handleAuth(data: TLoginForm) {
    try {
      const response = await signIn({ email: data.email, password: data.password });

      if (response.register.admin === true) {
        push(ERoutes.HOME);
        return;
      }

      const { initial_date, final_date } = await getFormById(response.company.form_id);
      const today = new Date();

      const todayIsBeforeThanInitialDate = isBefore(today, new Date(initial_date));
      const todayIsAfterThanFinalDate = isAfter(today, new Date(final_date));

      if (!todayIsBeforeThanInitialDate && !todayIsAfterThanFinalDate) {
        push(ERoutes.USER_INFO);
      } else {
        toast.error('Esse formulario expirou', { theme: 'dark' });
      }
    } catch (error) {
      toast.error('Confira seus dados e tente novamente', { theme: 'dark' });
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <h1>Admin</h1>

      <form onSubmit={handleSubmit(handleAuth)}>
        <Input id="email" label="Seu e-mail" error={formState.errors.email} {...register('email')} />

        <Input id="password" label="Sua senha" error={formState.errors.password} {...register('password')} />

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};
