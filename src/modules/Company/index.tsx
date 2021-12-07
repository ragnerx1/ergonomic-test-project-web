import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import Button from '@components/Button';
import Header from '@components/Header';
import { useCompany } from '@hooks/company';
import { ICompany } from '@dtos/company';

import { IModalCreateCompanyActions } from './components/ModalCreateCompany/types';
import { IModalDeleteCompanyActions } from './components/ModalDeleteCompany/types';
import ModalCreateCompany from './components/ModalCreateCompany';
import ModalDeleteCompany from './components/ModalDeleteCompany';

import { IListCompanies } from './types';
import { Container } from './styles';

export const Company: React.FC = () => {
  const { getCompanies, companies } = useCompany();

  const modalCreateCompany = useRef<IModalCreateCompanyActions>(null);
  const modalDeleteCompany = useRef<IModalDeleteCompanyActions>(null);

  const [companySelected, setCompanySelected] = useState<ICompany>();
  const [serach, setSearch] = useState('');

  useEffect(() => {
    getCompanies().then();
  }, [getCompanies]);

  function handleModalDelete(company: ICompany) {
    setCompanySelected(company);
    modalDeleteCompany.current?.handleVisibleModal();
  }

  function handleModalEditModal(company: ICompany) {
    setCompanySelected(company);
    modalCreateCompany.current?.handleVisibleModal();
  }

  const filter = (listCompanies: ICompany[], query: string) =>
    listCompanies.filter(company => company.name.toLowerCase().includes(query));

  function CompaniesList({ listCompanies, query }: IListCompanies) {
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
              <button type="button" onClick={() => handleModalEditModal(company)}>
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={() => handleModalDelete(company)}>
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
          <h1>Empresas</h1>

          <div className="input-container">
            <label htmlFor="search">
              <AiOutlineSearch color="black" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Buscar empresas"
              value={serach}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <Button title="Cadastrar nova empresa" onPress={() => modalCreateCompany.current?.handleVisibleModal()} />
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

        <CompaniesList listCompanies={companies} query={serach} />
      </section>

      <ModalCreateCompany company={companySelected!} ref={modalCreateCompany} />
      <ModalDeleteCompany company={companySelected!} ref={modalDeleteCompany} />
    </Container>
  );
};
