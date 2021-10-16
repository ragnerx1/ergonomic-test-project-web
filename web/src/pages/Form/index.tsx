/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';

import Button from '@components/Button';
import Header from '@components/Header';
import { IModalFormDeleteActions } from '@components/ModalFormDelete/types';
import ModalFormDelete from '@components/ModalFormDelete';
import ComponentModalCreateForm from '@components/ComponentModalCreateForm';
import api from '../../services/api';
import { Container } from './styles';
import { IForm, IFormList } from './types';

const Form: React.FC = () => {
  const modalFormDelete = useRef<IModalFormDeleteActions>(null);

  const [forms, setForms] = useState<IForm[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [companySelected, setCompanySelected] = useState('');
  const [serach, setSearch] = useState('');
  const [name, setName] = useState('');

  const handleActive = useCallback(async (form: IForm) => {
    const token = localStorage.getItem('ergonomic@token');
    const { name: formName, active, id } = form;
    try {
      await api.put(
        `forms/${id}`,
        { name: formName, active: !active },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
    } catch (error) {
      toast.error('Erro ao ativar formulário');
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('ergonomic@token');
    api
      .get('forms', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setForms(response.data));
  }, [visibleModal, handleActive]);

  function handleModal() {
    setVisibleModal(oldValue => !oldValue);
  }

  function handleModalDelete(id: string) {
    setCompanySelected(id);
    modalFormDelete.current?.handleVisibleModal();
  }

  function handleModalEditModal(id: string, nameForm: string) {
    setCompanySelected(id);
    setName(nameForm);
    setVisibleModal(oldValue => !oldValue);
  }

  const filter = (listForms: IForm[], query: string) =>
    listForms.filter(form => form.name.toLowerCase().includes(query));

  function FormsList({ listForms, query }: IFormList) {
    const filtered = filter(listForms, query);

    return (
      <>
        {filtered.map(form => (
          <section key={form.id}>
            <div className="id">{`${form.id.substring(0, 25)}...`}</div>
            <div className="form">
              <p>{form.name}</p>
            </div>
            <div className="option">
              <input
                type="checkbox"
                checked={form.active}
                onChange={e => handleActive(form)}
              />
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => handleModalEditModal(form.id, form.name)}
              >
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalDelete(form.id)}>
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
          <h1>Fomulários</h1>

          <div className="input-container">
            <label htmlFor="search">
              <AiOutlineSearch color="black" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Buscar formulários"
              value={serach}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <Button title="Cadastrar novo formulário" onPress={handleModal} />
        </div>

        <section className="header-table">
          <div>
            <h3>ID</h3>
          </div>
          <div className="header-company">
            <h3>NOME</h3>
          </div>
          <div>
            <h3>ATIVO</h3>
          </div>
          <div>
            <h3>EDITAR</h3>
          </div>
          <div>
            <h3>DELETAR</h3>
          </div>
        </section>

        <FormsList listForms={forms} query={serach} />
      </section>

      <ComponentModalCreateForm
        status={visibleModal}
        onPress={handleModal}
        form={name}
        id={companySelected}
      />

      <ModalFormDelete company={companySelected} ref={modalFormDelete} />
    </Container>
  );
};

export default Form;
