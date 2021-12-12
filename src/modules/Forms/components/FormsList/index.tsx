import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { filterFormsQuery } from '@utils/filterQuery';
import { IForm } from '@dtos/form';
import { useForms } from '@hooks/form';
import { ColumnLarge } from '@components/ColumnLarge';
import { Container } from './styles';
import { IFormList } from './types';

export const FormsList: React.FC<IFormList> = ({ listForms, query, handleEditForm, handleDeleteForm }) => {
  const { setForm } = useForms();

  function handleDelete(form: IForm) {
    setForm(form);
    handleDeleteForm();
  }

  return (
    <>
      {filterFormsQuery(listForms, query).map(form => (
        <Container key={form.id}>
          <ColumnLarge>
            <p>{`${form.id.substring(0, 25)}...`}</p>
          </ColumnLarge>

          <ColumnLarge>
            <p>{form.name}</p>
          </ColumnLarge>

          <ColumnLarge>
            <button type="button" onClick={handleEditForm}>
              <AiFillEdit color="black" />
            </button>
          </ColumnLarge>

          <ColumnLarge>
            <button type="button" onClick={() => handleDelete(form)}>
              <AiFillDelete color="black" />
            </button>
          </ColumnLarge>
        </Container>
      ))}
    </>
  );
};
