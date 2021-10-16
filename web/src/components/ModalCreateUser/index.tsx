import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { ICompany } from 'pages/Company/types';
import api from '../../services/api';
import Button from '../Button';
import { IModalCreateUser, IModalCreateUserActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateUser: React.ForwardRefRenderFunction<
  IModalCreateUserActions,
  IModalCreateUser
> = ({ user }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [companySelected, setCompanySelected] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [companies, setCompanies] = useState<ICompany[]>([]);

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

    try {
      const token = localStorage.getItem('ergonomic@token');
      if (user) {
        await api.put(`register/info/${user?.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await api.post('register', data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      handleCloseModal();
    } catch (err) {
      toast.error('Erro ao criar empresa!');
    }
  }

  return (
    <Container
      open={isVisible}
      onClose={handleVisibleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
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

        <Button
          title={user ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateUser);
