/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import ComponentButton from '../../components/ComponentButton';
import ComponentDeleteCompanyModal from '../../components/ComponentDeleteCompanyModal';
import ComponentHeader from '../../components/ComponentHeader';
import ComponentModalCreateCompany from '../../components/ComponentModalCreateCompany';
import api from '../../services/api';
import { Container } from './styles';

interface CompanyProps {
  id: string;
  name: string;
}

interface CompaniesListProps {
  listCompanies: CompanyProps[];
  query: string;
}

const Company: React.FC = () => {
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const [companySelected, setCompanySelected] = useState('');
  const [serach, setSearch] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('ergonomic@token');
    api
      .get('company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setCompanies(response.data));
  }, [visibleModal]);

  function handleModal() {
    setVisibleModal(oldValue => !oldValue);
  }

  function handleModalDelete() {
    setVisibleModalDelete(oldValue => !oldValue);
  }

  function handleModalEditModal(company: string) {
    setCompanySelected(company);
    setVisibleModal(oldValue => !oldValue);
  }

  const filter = (listCompanies: CompanyProps[], query: string) =>
    listCompanies.filter(company => company.name.toLowerCase().includes(query));

  function CompaniesList({ listCompanies, query }: CompaniesListProps) {
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
                onClick={() => handleModalEditModal(company.name)}
              >
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button type="button" onClick={handleModalDelete}>
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

          <ComponentButton
            title="Cadastrar nova empresa"
            onPress={handleModal}
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

        <CompaniesList listCompanies={companies} query={serach} />
      </section>

      <ComponentModalCreateCompany
        status={visibleModal}
        onPress={handleModal}
        company={companySelected}
      />

      <ComponentDeleteCompanyModal
        status={visibleModalDelete}
        onPress={handleModalDelete}
        company={companySelected}
      />
    </Container>
  );
};

export default Company;
