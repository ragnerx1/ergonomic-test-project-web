/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import ComponentButton from '../../components/ComponentButton';
import ComponentCreateUserModal from '../../components/ComponentCreateUserModal';
import ComponentDeleteUserModal from '../../components/ComponentDeleteUserModal';
import ComponentHeader from '../../components/ComponentHeader';
import api from '../../services/api';
import { Container } from './styles';

interface UserProps {
  id: string;
  email: string;
  access: boolean;
}

interface UsersListProps {
  usersList: UserProps[];
  query: string;
}

const Register: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [companySelected, setCompanySelected] = useState('');
  const [serach, setSearch] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('ergonomic@token');
    api
      .get('register', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setUsers(response.data));
  }, [visibleModal]);

  function handleModal() {
    setVisibleModal(oldValue => !oldValue);
  }

  function handleModalDelete() {
    setVisibleModalDelete(oldValue => !oldValue);
  }

  function handleModalEditModal(company: string) {
    setCompanySelected(company);
    setVisibleModal(oldValue => !oldValue);
  }

  const filter = (usersList: UserProps[], query: string) =>
    usersList.filter(user => user.email.toLowerCase().includes(query));

  function UsersList({ usersList, query }: UsersListProps) {
    const filtered = filter(usersList, query);

    return (
      <>
        {filtered.map(user => (
          <section key={user.id}>
            <div className="id">{`${user.id.substring(0, 25)}...`}</div>
            <div className="company">
              <p>{user.email}</p>
            </div>
            <div className="admin">
              <input type="checkbox" />
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => handleModalEditModal(user.email)}
              >
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={handleModalDelete}>
                <AiFillDelete color="black" />
              </button>
            </div>
          </section>
        ))}
      </>
    );
  }

  return (
    <Container>
      <ComponentHeader buttomBack />

      <section>
        <div>
          <div>
            <h1>Usuários</h1>

            <div className="input-container">
              <label htmlFor="search">
                <AiOutlineSearch color="black" />
              </label>
              <input
                id="search"
                type="text"
                placeholder="Buscar usuários"
                value={serach}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div>
            <ComponentButton title="Importar usuários" onPress={handleModal} />

            <ComponentButton
              style={{ marginLeft: 20 }}
              title="Cadastrar novo usuário"
              onPress={handleModal}
            />
          </div>
        </div>

        <section className="header-table">
          <div>
            <h3>ID</h3>
          </div>
          <div className="header-user">
            <h3>E-MAIL</h3>
          </div>
          <div>
            <h3>ADMIN</h3>
          </div>
          <div>
            <h3>EDITAR</h3>
          </div>
          <div>
            <h3>DELETAR</h3>
          </div>
        </section>

        <UsersList usersList={users} query={serach} />
      </section>

      <ComponentCreateUserModal
        status={visibleModal}
        onPress={handleModal}
        company={companySelected}
      />

      <ComponentDeleteUserModal
        status={visibleModalDelete}
        onPress={handleModalDelete}
        company={companySelected}
      />
    </Container>
  );
};

export default Register;
