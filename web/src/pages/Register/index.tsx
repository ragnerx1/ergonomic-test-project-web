import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { IModalUserDeleteActions } from '@components/ModalUserDelete/types';
import { IModalCreateUserActions } from '@components/ModalCreateUser/types';
import { IModalImportUserActions } from '@components/ModalImportUser/types';
import ModalCreateUser from '@components/ModalCreateUser';
import ModalUserDelete from '@components/ModalUserDelete';
import ModalImportUser from '@components/ModalImportUser';
import Header from '@components/Header';
import Button from '@components/Button';
import api from '../../services/api';
import { IUser, IUsersList } from './types';
import { Container } from './styles';

const Register: React.FC = () => {
  const modalUserDelete = useRef<IModalUserDeleteActions>(null);
  const modalUserCreate = useRef<IModalCreateUserActions>(null);
  const modalImportUser = useRef<IModalImportUserActions>(null);

  const [users, setUsers] = useState<IUser[]>([]);
  const [userSerlected, setUserSerlected] = useState('');
  const [userEdit, setUserEdit] = useState<IUser>();
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
  }, []);

  function handleModalDelete(user?: string) {
    setUserSerlected(user || '');
    modalUserDelete.current?.handleVisibleModal();
  }

  function handleModalEditModal(user: IUser) {
    setUserEdit(user);
    modalUserCreate.current?.handleVisibleModal();
  }

  const filter = (usersList: IUser[], query: string) =>
    usersList.filter(user => user.email.toLowerCase().includes(query));

  function UsersList({ usersList, query }: IUsersList) {
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
      <Header buttomBack />

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
            <Button
              title="Importar usuários"
              onPress={() => modalImportUser.current?.handleVisibleModal()}
            />

            <Button
              style={{ marginLeft: 20 }}
              title="Cadastrar novo usuário"
              onPress={() => modalUserCreate.current?.handleVisibleModal()}
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

      <ModalCreateUser user={userEdit} ref={modalUserCreate} />
      <ModalUserDelete user={userSerlected} ref={modalUserDelete} />
      <ModalImportUser ref={modalImportUser} />
    </Container>
  );
};

export default Register;
