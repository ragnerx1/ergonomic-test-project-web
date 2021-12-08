import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { filterCompaniesQuery } from '@utils/filterQuery';
import { ColumnLarge } from '@components/ColumnLarge';
import { ICompany } from '@dtos/company';
import { useCompany } from '@hooks/company';
import { Container } from './styles';
import { IListCompanies } from './types';

export const CompaniesList: React.FC<IListCompanies> = ({ listCompanies, query, deleteCompany, editCompany }) => {
  const { setCompany } = useCompany();

  function handleDeleteCompany(company: ICompany) {
    setCompany(company);
    deleteCompany();
  }

  return (
    <>
      {filterCompaniesQuery(listCompanies, query).map(company => (
        <Container key={company.id}>
          <ColumnLarge>
            <p>{`${company.id.substring(0, 25)}...`}</p>
          </ColumnLarge>

          <ColumnLarge>
            <p>{company.name}</p>
          </ColumnLarge>

          <ColumnLarge>
            <button type="button" onClick={editCompany}>
              <AiFillEdit color="black" />
            </button>
          </ColumnLarge>

          <ColumnLarge>
            <button type="button" onClick={() => handleDeleteCompany(company)}>
              <AiFillDelete color="black" />
            </button>
          </ColumnLarge>
        </Container>
      ))}
    </>
  );
};
