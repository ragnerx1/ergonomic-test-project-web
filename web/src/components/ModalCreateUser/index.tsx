import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useRegister } from '@hooks/register';
import { useCompany } from '@hooks/company';
import Button from '../Button';
import { IModalCreateUser, IModalCreateUserActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateUser: React.ForwardRefRenderFunction<
  IModalCreateUserActions,
  IModalCreateUser
> = ({ user }, ref) => {
  const { createRegister, editRegister } = useRegister();
  const { getCompanies, companies } = useCompany();

  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [companySelected, setCompanySelected] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setIsAdmin(user.access);
      setCompanySelected(user.company_id);
    }

    getCompanies().then();
  }, [user, getCompanies]);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  function handleCloseModal() {
    setCompanySelected('');
    setEmail('');
    setIsAdmin(false);
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    const data = {
      email,
      access: isAdmin,
      company_id: companySelected,
    };

    if (user) {
      await editRegister(user.id, data);
    } else {
      await createRegister(data);
    }

    handleCloseModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <section className="header">
          <h2>{user ? 'Editar' : 'Criar'} usuário </h2>
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
            onChange={() => setIsAdmin(oldValue => !oldValue)}
          />

          <label htmlFor="admin">Empresa</label>
          <select
            name="companies"
            id="admin"
            value={companySelected}
            onChange={e => setCompanySelected(e.target.value)}
          >
            {companies.map(company => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </form>

        <Button title="Salvar" onPress={handleCreateCompany} />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateUser);
