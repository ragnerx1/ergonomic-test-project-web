import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import { useCompany } from '@hooks/company';
import { HeaderModal } from '@components/HeaderModal';
import { useForm } from '@hooks/form';
import Button from '@components/Button';
import { IModalCreateCompany, IModalCreateCompanyActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalCreateCompany: React.ForwardRefRenderFunction<IModalCreateCompanyActions, IModalCreateCompany> = (
  { company },
  ref,
) => {
  const { createCompany, editCompany } = useCompany();
  const { getForms, forms } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [formSelected, setFormSelected] = useState('');

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => ({ handleVisibleModal }));

  useEffect(() => {
    getForms().then();
    if (company) setName(company.name);
  }, [company, getForms]);

  function handleCloseModal() {
    setName('');
    handleVisibleModal();
  }

  async function handleCreateCompany() {
    if (!company) {
      await createCompany(name, formSelected);
    } else {
      const data = { id: company.id, name, form_id: formSelected };
      await editCompany(data);
    }

    handleCloseModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title={`${company ? 'Editar' : 'Criar'} empresa`} onClick={handleCloseModal} />

        <form action="">
          <label htmlFor="name">Nome da empresa</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </form>

        <label htmlFor="admin">Formulários</label>
        <select name="companies" id="admin" value={formSelected} onChange={e => setFormSelected(e.target.value)}>
          {forms.map(form => (
            <option key={form.id} value={form.id}>
              {form.name}
            </option>
          ))}
        </select>

        <Button title="Salvar" onPress={handleCreateCompany} />
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalCreateCompany);
