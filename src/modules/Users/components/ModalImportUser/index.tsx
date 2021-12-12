import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCompany } from '@hooks/company';
import { useUser } from '@hooks/user';
import Button from '@components/Button';
import Select from '@components/Select';

import { HeaderModal } from '@components/HeaderModal';
import { IModalImportUserActions, TImportUserForm } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalImportUser: React.ForwardRefRenderFunction<IModalImportUserActions> = (props, ref) => {
  const { companies, getCompanies } = useCompany();
  const { importUsers } = useUser();
  const { register, handleSubmit } = useForm<TImportUserForm>();

  const [isVisible, setIsVisible] = useState(false);
  const [file, setFile] = useState<any>();

  useImperativeHandle(ref, () => ({ handleVisibleModal }));
  useEffect(() => {
    getCompanies().then();
  }, [getCompanies]);

  function handleVisibleModal() {
    setIsVisible(oldValue => !oldValue);
  }

  async function handleImport(data: TImportUserForm) {
    const form = new FormData();
    form.append('file', file[0]);

    await importUsers(form, data.company_id);
    handleVisibleModal();
  }

  return (
    <Container open={isVisible} onClose={handleVisibleModal}>
      <ContainerCreateData>
        <HeaderModal title="Impotar usuários" onClick={handleVisibleModal} />

        <form onSubmit={handleSubmit(handleImport)}>
          <p>Escolher arquivo csv:</p>
          <input type="file" name="file" style={{ color: 'black' }} onChange={e => setFile(e.target.files)} />

          <Select id="compoanies" label="Empresa" list={companies} {...register('company_id')} />

          <Button type="submit" title="Importar" />
        </form>
      </ContainerCreateData>
    </Container>
  );
};

export default forwardRef(ModalImportUser);
