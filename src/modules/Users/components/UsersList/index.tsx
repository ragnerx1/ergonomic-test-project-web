import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { useUser } from '@hooks/user';
import { filterQuery } from '@utils/filterQuery';

import { ColumnMiddle } from '@components/ColumnMiddle';
import { IUserList } from './types';
import { Container } from './styles';

export const UsersList: React.FC<IUserList> = ({
  usersList,
  query,
  handleModalDelete,
  handleModalEditModal,
}) => {
  const { setAdmin } = useUser();

  async function handleAdmin(id: string) {
    await setAdmin(id);
  }

  return (
    <>
      {filterQuery(usersList, query).map(user => (
        <Container key={user.id}>
          <ColumnMiddle>
            <p>{`${user.id.substring(0, 20)}...`}</p>
          </ColumnMiddle>

          <ColumnMiddle>
            <p>{user.email}</p>
          </ColumnMiddle>

          <ColumnMiddle>
            <input
              type="checkbox"
              checked={user.admin}
              onChange={() => handleAdmin(user.id)}
            />
          </ColumnMiddle>

          <ColumnMiddle>
            <button type="button" onClick={handleModalEditModal}>
              <AiFillEdit color="black" />
            </button>
          </ColumnMiddle>

          <ColumnMiddle>
            <button type="button" onClick={handleModalDelete}>
              <AiFillDelete color="black" />
            </button>
          </ColumnMiddle>
        </Container>
      ))}
    </>
  );
};
