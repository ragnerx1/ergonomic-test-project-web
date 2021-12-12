import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Header from '@components/Header';
import Button from '@components/Button';

import { useUser } from '@hooks/user';

import ModalImportUser from './components/ModalImportUser';
import ModalUserDelete from './components/ModalDeleteUser';
import ModalCreateUser from './components/ModalCreateUser';
import { IModalImportUserActions } from './components/ModalImportUser/types';
import { IModalCreateUserActions } from './components/ModalCreateUser/types';
import { IModalUserDeleteActions } from './components/ModalDeleteUser/types';

import { UsersList } from './components/UsersList';
import { Container } from './styles';

export const Users: React.FC = () => {
  const { getUsers, users } = useUser();

  const modalUserDelete = useRef<IModalUserDeleteActions>(null);
  const modalUserCreate = useRef<IModalCreateUserActions>(null);
  const modalImportUser = useRef<IModalImportUserActions>(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers().then();
  }, [getUsers]);

  function handleModalEditModal() {
    modalUserCreate.current?.handleVisibleModal();
  }

  return (
    <Container>
      <Header buttomBack />

      <section className="content">
        <div className="table-header">
          <div className="part-one">
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
            <Button title="Importar usuários" onPress={() => modalImportUser.current?.handleVisibleModal()} />

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

        <UsersList
          usersList={users}
          query={search}
          handleModalDelete={() => modalUserDelete.current?.handleVisibleModal()}
          handleModalEditModal={handleModalEditModal}
        />
      </section>

      <ModalCreateUser ref={modalUserCreate} />
      <ModalUserDelete ref={modalUserDelete} />
      <ModalImportUser ref={modalImportUser} />
    </Container>
  );
};
