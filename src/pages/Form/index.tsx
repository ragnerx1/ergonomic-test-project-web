import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { IModalFormDeleteActions } from '@components/ModalFormDelete/types';
import { IModalCreateFormActions } from '@components/ModalCreateForm/types';
import ModalFormDelete from '@components/ModalFormDelete';
import ModalCreateForm from '@components/ModalCreateForm';
import Button from '@components/Button';
import Header from '@components/Header';
import { useForm } from '@hooks/form';
import { IForm, IFormList } from './types';
import { Container } from './styles';

const Form: React.FC = () => {
  const { getForms, forms, setActive } = useForm();

  const modalFormDelete = useRef<IModalFormDeleteActions>(null);
  const modalCreateForm = useRef<IModalCreateFormActions>(null);

  const [companySelected, setCompanySelected] = useState<IForm>();
  const [search, setSearch] = useState('');

  async function handleActive(form: IForm) {
    await setActive(form.id, form);
  }

  useEffect(() => {
    getForms().then();
  }, [getForms]);

  function handleModalDelete(selectedForm: IForm) {
    setCompanySelected(selectedForm);
    modalFormDelete.current?.handleVisibleModal();
  }

  function handleModalEditModal(selectedForm: IForm) {
    setCompanySelected(selectedForm);
    modalCreateForm.current?.handleVisibleModal();
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
                onChange={() => handleActive(form)}
              />
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalEditModal(form)}>
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalDelete(form)}>
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
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <Button
            title="Cadastrar novo formulário"
            onPress={() => modalCreateForm.current?.handleVisibleModal()}
          />
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

        <FormsList listForms={forms} query={search} />
      </section>

      <ModalCreateForm form={companySelected!} ref={modalCreateForm} />
      <ModalFormDelete company={companySelected!} ref={modalFormDelete} />
    </Container>
  );
};

export default Form;
