/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useCompany } from '@hooks/company';
import Button from '../Button';

import { IModalCreateCompany, IModalCreateCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateCompany: React.ForwardRefRenderFunction<
  IModalCreateCompanyActions,
  IModalCreateCompany
> = ({ company }, ref) => {
  const { createCompany, editCompany } = useCompany();

  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    if (company) setName(company.name);
  }, [company]);

  function handleCloseModal() {
    setName('');
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    if (company.id) {
      const data = { id: company.id, name };
      await editCompany(data);
    } else {
      await createCompany(name);
    }

    handleCloseModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <section className="header">
          <h2>{company ? 'Editar' : 'Criar'} empresa</h2>
          <button type="button" onClick={handleCloseModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <form action="">
          <label htmlFor="name">Nome da empresa</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </form>

        <Button title="Salvar" onPress={handleCreateCompany} />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateCompany);
