/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { IModalUserDeleteActions } from '@components/ModalUserDelete/types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';

import ComponentButton from '../../components/ComponentButton';
import ComponentCreateUserModal from '../../components/ComponentCreateUserModal';
import ModalUserDelete from '../../components/ModalUserDelete';
import ComponentHeader from '../../components/ComponentHeader';
import ComponentImportUsersModal from '../../components/ComponentImportUsersModal';
import api from '../../services/api';
import { Container } from './styles';

export interface UserProps {
  id: string;
  email: string;
  access: boolean;
  company_id: string;
}

interface UsersListProps {
  usersList: UserProps[];
  query: string;
}

const Register: React.FC = () => {
  const modalUserDelete = useRef<IModalUserDeleteActions>(null);

  const [users, setUsers] = useState<UserProps[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [visibleModalImport, setVisibleModalImport] = useState(false);
  const [userSerlected, setUserSerlected] = useState('');
  const [userEdit, setUserEdit] = useState<UserProps>();
  const [serach, setSearch] = useState('');

  const handleAdmin = useCallback(async (id: string) => {
    try {
      const token = localStorage.getItem('ergonomic@token');

      await api.request({
        method: 'PUT',
        url: `register/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      toast.error('Erro ao tonar usuário admin');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('ergonomic@token');
    api
      .get('register', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setUsers(response.data));
  }, [visibleModal, visibleModalDelete, visibleModalImport]);

  function handleModal() {
    setVisibleModal(oldValue => !oldValue);
  }

  function handleModalDelete(user?: string) {
    setUserSerlected(user || '');
    setVisibleModalDelete(oldValue => !oldValue);
  }

  function handleModalImport() {
    setVisibleModalImport(oldValue => !oldValue);
  }

  function handleModalEditModal(user: UserProps) {
    setUserEdit(user);
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
              <input
                type="checkbox"
                checked={user.access}
                onChange={e => handleAdmin(user.id)}
              />
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalEditModal(user)}>
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalDelete(user.id)}>
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
            <ComponentButton
              title="Importar usuários"
              onPress={handleModalImport}
            />

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
        user={userEdit}
      />

      <ModalUserDelete user={userSerlected} ref={modalUserDelete} />

      <ComponentImportUsersModal
        status={visibleModalImport}
        onPress={handleModalImport}
      />
    </Container>
  );
};

export default Register;
