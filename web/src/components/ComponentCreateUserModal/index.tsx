/* eslint-disable prettier/prettier */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { CompanyProps } from '../../pages/Company';
import { UserProps } from '../../pages/Register';

import api from '../../services/api';
import ComponentButton from '../ComponentButton';

import { Container, ContainerCreateData } from './styles';

interface Props {
  status: boolean;
  onPress(): void;
  user: UserProps | undefined;
}

const ComponentCreateUserModal: React.FC<Props> = ({
  status,
  onPress,
  user,
}) => {
  const [email, setEmail] = useState('');
  const [companySelected, setCompanySelected] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [companies, setCompanies] = useState<CompanyProps[]>([]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setIsAdmin(user.access);
      setCompanySelected(user.company_id);
    }

    const token = localStorage.getItem('ergonomic@token');
    api
      .get('company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setCompanies(response.data));
  }, [user]);

  function handleCloseModal() {
    setCompanySelected('');
    setEmail('');
    setIsAdmin(false);
    onPress();
  }

  async function handleCreateCompany() {
    const data = {
      email,
      access: isAdmin,
      company_id: companySelected,
    };

    try {
      const token = localStorage.getItem('ergonomic@token');
      if (user) {
        await api.put(
          `register/info/${user?.id}`,
          data,
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } else {
        await api.post(
          'register',
          data,
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      handleCloseModal();
    } catch (err) {
      toast.error('Erro ao criar empresa!');
    }
  }

  return (
    <Container
      open={status}
      onClose={onPress}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ContainerCreateData>
        <section className="header">
          <h2>
            {user ? 'Editar' : 'Criar'}
            {' '}
            usuário
          </h2>
          <button type="button" onClick={handleCloseModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <form onSubmit={handleCreateCompany}>
          <label htmlFor="name">E-mail da usuário</label>
          <input
            type="text"
            id="name"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="admin">Usuário administrativo</label>
          <input
            type="checkbox"
            id="admin"
            checked={isAdmin}
            onChange={e => setIsAdmin(oldValue => !oldValue)}
          />

          <label htmlFor="admin">Empresa</label>
          <select
            name="companies"
            id="admin"
            value={companySelected}
            onChange={e => setCompanySelected(e.target.value)}
          >
            {companies.map(company => (
              <option value={company.id}>{company.name}</option>
            ))}
          </select>
        </form>

        <ComponentButton
          title={user ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentCreateUserModal;
