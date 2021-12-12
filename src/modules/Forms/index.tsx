import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Button from '@components/Button';
import Header from '@components/Header';
import { useForms } from '@hooks/form';
import { IModalFormDeleteActions } from './components/ModalFormDelete/types';
import { IModalCreateFormActions } from './components/ModalCreateForm/types';
import ModalFormDelete from './components/ModalFormDelete';
import ModalCreateForm from './components/ModalCreateForm';
import { Container } from './styles';
import { FormsList } from './components/FormsList';

export const Forms: React.FC = () => {
  const { getForms, forms } = useForms();

  const modalFormDelete = useRef<IModalFormDeleteActions>(null);
  const modalCreateForm = useRef<IModalCreateFormActions>(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  return (
    <Container>
      <Header buttomBack />

      <section className="content">
        <div>
          <h1>Fomulários</h1>

          <div className="input-container">
            <label htmlFor="search">
              <AiOutlineSearch color="black" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Buscar formulários"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <Button title="Cadastrar novo formulário" onPress={() => modalCreateForm.current?.handleVisibleModal()} />
        </div>

        <section className="header-table">
          <div>
            <h3>ID</h3>
          </div>
          <div className="header-company">
            <h3>NOME</h3>
          </div>
          <div>
            <h3>EDITAR</h3>
          </div>
          <div>
            <h3>DELETAR</h3>
          </div>
        </section>

        <FormsList
          listForms={forms}
          query={search}
          handleDeleteForm={() => modalFormDelete.current?.handleVisibleModal()}
          handleEditForm={() => modalCreateForm.current?.handleVisibleModal()}
        />
      </section>

      <ModalCreateForm ref={modalCreateForm} />
      <ModalFormDelete ref={modalFormDelete} />
    </Container>
  );
};
