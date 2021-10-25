import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { useRegister } from '@hooks/register';
import { useCompany } from '@hooks/company';
import { HeaderModal } from '@components/HeaderModal';
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
  const [access, setAccess] = useState(false);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setAccess(user.access);
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
    setAccess(false);
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    const data = { email, access, company_id: companySelected };

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
        <HeaderModal
          title={`${user ? 'Editar' : 'Criar'} usuário`}
          onClick={handleCloseModal}
        />

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
            checked={access}
            onChange={() => setAccess(oldValue => !oldValue)}
          />

          <label htmlFor="admin">Empresa</label>
          <select
            name="companies"
            id="admin"
            value={companySelected}
            onChange={e => setCompanySelected(e.target.value)}
          >
            {companies
              .concat({ id: '', name: 'selecionar empresa' })
              .map(company => (
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
