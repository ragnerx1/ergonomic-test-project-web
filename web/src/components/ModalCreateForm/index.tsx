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
import { IModalCreateForm, IModalCreateFormActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateForm: React.ForwardRefRenderFunction<
  IModalCreateFormActions,
  IModalCreateForm
> = ({ form, id }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    if (form) {
      setName(form);
    }
  }, [form]);

  function handleCloseModal() {
    setName('');
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    try {
      const token = localStorage.getItem('ergonomic@token');
      if (id) {
        await api.put(
          `forms/${id}`,
          { name },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
      } else {
        await api.post(
          'forms',
          { name, active: true },
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
          <h2>Criar formulário</h2>
          <button type="button" onClick={handleCloseModal}>
            <AiFillCloseCircle size={20} />
          </button>
        </section>

        <form action="">
          <label htmlFor="name">Nome do formulário</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </form>

        <Button
          title={form ? 'Editar' : 'Criar'}
          onPress={handleCreateCompany}
        />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateForm);
