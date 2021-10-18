import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useForm } from '@hooks/form';
import Button from '../Button';
import { IModalCreateForm, IModalCreateFormActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateForm: React.ForwardRefRenderFunction<
  IModalCreateFormActions,
  IModalCreateForm
> = ({ form }, ref) => {
  const { createForm, editForm } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    if (form) setName(form.name);
  }, [form]);

  function handleCloseModal() {
    setName('');
    handleVisibleModal();
  }

  async function handleCreateForm() {
    if (form) {
      const data = { id: form.id, name, active: form.active };
      await editForm(data);
    } else {
      await createForm({ name, active: true });
    }

    handleCloseModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <section className="header">
          <h2>{form ? 'Editar' : 'Criar'} formulário</h2>
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

        <Button title="Salvar" onPress={handleCreateForm} />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateForm);
