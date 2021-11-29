import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { useForm } from '@hooks/form';
import { HeaderModal } from '@components/HeaderModal';
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
        <HeaderModal
          title={`${form ? 'Editar' : 'Criar'} formulário`}
          onClick={handleCloseModal}
        />

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
