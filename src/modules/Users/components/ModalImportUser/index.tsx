import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { useCompany } from '@hooks/company';
import { useUser } from '@hooks/user';
import Button from '@components/Button';
import { IModalImportUserActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalImportUser: React.ForwardRefRenderFunction<IModalImportUserActions> =
  (props, ref) => {
    const { getCompanies, companies } = useCompany();
    const { importUsers } = useUser();

    const [isVisible, setIsVisible] = useState(false);
    const [companySelected, setCompanySelected] = useState('');
    const [file, setFile] = useState<any>();

    useImperativeHandle(ref, () => ({ handleVisibleModal }));
    useEffect(() => {
      getCompanies().then();
    }, [getCompanies]);

    function handleVisibleModal() {
      setIsVisible(oldValue => !oldValue);
    }

    async function handleImport() {
      const form = new FormData();
      form.append('file', file[0]);

      await importUsers(form);
      handleVisibleModal();
    }

    return (
      <Container open={isVisible} onClose={handleVisibleModal}>
        <ContainerCreateData>
          <section className="header">
            <h2>Importar usuários</h2>
            <button type="button" onClick={handleVisibleModal}>
              <AiFillCloseCircle size={20} />
            </button>
          </section>

          <p>Escolher arquivo csv:</p>
          <input
            type="file"
            name="file"
            style={{ color: 'black' }}
            onChange={e => setFile(e.target.files)}
          />

          <label htmlFor="admin">Empresa</label>
          <select
            name="companies"
            id="admin"
            value={companySelected}
            onChange={e => setCompanySelected(e.target.value)}
          >
            {companies
              .concat({ id: '', name: 'selecionar empresa', form_id: '' })
              .map(company => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
          </select>

          <Button title="Importar" onPress={handleImport} />
        </ContainerCreateData>
      </Container>
    );
  };

export default forwardRef(ModalImportUser);
