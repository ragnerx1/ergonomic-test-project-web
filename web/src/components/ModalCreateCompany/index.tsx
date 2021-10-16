/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Button from '../Button';

import { IModalCreateCompany, IModalCreateCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateCompany: React.ForwardRefRenderFunction<
  IModalCreateCompanyActions,
  IModalCreateCompany
> = ({ company, id }, ref) => {
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    if (company) {
      setName(company);
    }
  }, [company]);

  function handleCloseModal() {
    setName('');
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      if (id) {
        await api.put(
          `company/${id}`,
          { name },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
      } else {
        await api.post(
          'company',
          { name },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      handleCloseModal();
    } catch (err) {
      toast.error('Erro ao criar empresa!');
    }
  }

  return (
    <Container
      open={isVisible}
      onClose={handleVisibleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ContainerCreateData>
        <section className="header">
          <h2>Criar empresa</h2>
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

        <Button
          title={company ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateCompany);
