import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Button from '@components/Button';
import Header from '@components/Header';
import { useCompany } from '@hooks/company';

import { IModalCreateCompanyActions } from './components/ModalCreateCompany/types';
import { IModalDeleteCompanyActions } from './components/ModalDeleteCompany/types';
import ModalCreateCompany from './components/ModalCreateCompany';
import ModalDeleteCompany from './components/ModalDeleteCompany';

import { Container } from './styles';
import { CompaniesList } from './components/CompaniesList';

export const Company: React.FC = () => {
  const { getCompanies, companies } = useCompany();

  const modalCreateCompany = useRef<IModalCreateCompanyActions>(null);
  const modalDeleteCompany = useRef<IModalDeleteCompanyActions>(null);

  const [serach, setSearch] = useState('');

  useEffect(() => {
    getCompanies().then();
  }, [getCompanies]);

  return (
    <Container>
      <Header buttomBack />

      <section className="content">
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

        <CompaniesList
          listCompanies={companies}
          query={serach}
          editCompany={() => modalCreateCompany.current?.handleVisibleModal()}
          deleteCompany={() => modalDeleteCompany.current?.handleVisibleModal()}
        />
      </section>

      <ModalCreateCompany ref={modalCreateCompany} />
      <ModalDeleteCompany ref={modalDeleteCompany} />
    </Container>
  );
};
