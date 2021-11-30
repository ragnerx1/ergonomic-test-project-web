import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import Header from '@components/Header';
import Button from '@components/Button';

import { useUser } from '@hooks/user';
import { IUser } from 'dtos/user';

import ModalImportUser from './components/ModalImportUser';
import ModalUserDelete from './components/ModalDeleteUser';
import ModalCreateUser from './components/ModalCreateUser';
import { IModalImportUserActions } from './components/ModalImportUser/types';
import { IModalCreateUserActions } from './components/ModalCreateUser/types';
import { IModalUserDeleteActions } from './components/ModalDeleteUser/types';

import { IUserList } from './types';
import { Container } from './styles';

export const Users: React.FC = () => {
  const { getUsers, users, setAdmin } = useUser();

  const modalUserDelete = useRef<IModalUserDeleteActions>(null);
  const modalUserCreate = useRef<IModalCreateUserActions>(null);
  const modalImportUser = useRef<IModalImportUserActions>(null);

  const [userSerlected, setUserSerlected] = useState<IUser>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers().then();
  }, [getUsers]);

  async function handleAdmin(id: string) {
    await setAdmin(id);
  }

  function handleModalDelete(user: IUser) {
    setUserSerlected(user);
    modalUserDelete.current?.handleVisibleModal();
  }

  function handleModalEditModal(user: IUser) {
    setUserSerlected(user);
    modalUserCreate.current?.handleVisibleModal();
  }

  const filter = (usersList: IUser[], query: string) =>
    usersList.filter(user => user.email.toLowerCase().includes(query));

  function UsersList({ usersList, query }: IUserList) {
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
                onChange={() => handleAdmin(user.id)}
              />
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalEditModal(user)}>
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalDelete(user)}>
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
                value={search}
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

        <UsersList usersList={users} query={search} />
      </section>

      <ModalCreateUser user={userSerlected!} ref={modalUserCreate} />
      <ModalUserDelete user={userSerlected!} ref={modalUserDelete} />
      <ModalImportUser ref={modalImportUser} />
    </Container>
  );
};
