import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import ComponentButton from '@components/ComponentButton';
import ComponentDeleteCompanyModal from '@components/ComponentDeleteCompanyModal';
import ComponentHeader from '@components/ComponentHeader';
import ComponentModalCreateCompany from '@components/ComponentModalCreateCompany';
import ComponentCreateQuestionModal from '@components/ModalCreateQuestion';
import { ICreateQuestionActions } from '@components/ModalCreateQuestion/types';

import api from '../../services/api';
import { IQuestionListProps, IQuestionProps } from './types';
import { Container } from './styles';

const Questions: React.FC = () => {
  const createQuestionModal = useRef<ICreateQuestionActions>(null);

  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [companySelected, setCompanySelected] = useState('');
  const [serach, setSearch] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('ergonomic@token');
    api
      .get('company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setQuestions(response.data));
  }, [visibleModal, visibleModalDelete]);

  function handleModal() {
    setVisibleModal(oldValue => !oldValue);
  }

  function handleModalDelete(id: string) {
    setCompanySelected(id);
    setVisibleModalDelete(oldValue => !oldValue);
  }

  function handleModalEditModal(id: string, nameCompany: string) {
    setCompanySelected(id);
    setName(nameCompany);
    setVisibleModal(oldValue => !oldValue);
  }

  const filter = (listCompanies: IQuestionProps[], query: string) =>
    listCompanies.filter(company => company.name.toLowerCase().includes(query));

  function CompaniesList({ listCompanies, query }: IQuestionListProps) {
    const filtered = filter(listCompanies, query);

    return (
      <>
        {filtered.map(company => (
          <section key={company.id}>
            <div className="id">{`${company.id.substring(0, 25)}...`}</div>
            <div className="company">
              <p>{company.name}</p>
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => handleModalEditModal(company.id, company.name)}
              >
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => handleModalDelete(company.id)}
              >
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
          <h1>Perguntas</h1>

          <div className="input-container">
            <label htmlFor="search">
              <AiOutlineSearch color="black" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Buscar perguntas"
              value={serach}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <ComponentButton
            title="Cadastrar nova pergunta"
            onPress={() => createQuestionModal.current?.handleVisibleModal()}
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
            <h3>EDITAR</h3>
          </div>
          <div>
            <h3>DELETAR</h3>
          </div>
        </section>

        <CompaniesList listCompanies={questions} query={serach} />
      </section>

      <ComponentCreateQuestionModal ref={createQuestionModal} />

      <ComponentModalCreateCompany
        status={visibleModal}
        onPress={handleModal}
        company={name}
        id={companySelected}
      />

      <ComponentDeleteCompanyModal
        status={visibleModalDelete}
        onPress={() => handleModalDelete('')}
        company={companySelected}
      />
    </Container>
  );
};

export default Questions;
