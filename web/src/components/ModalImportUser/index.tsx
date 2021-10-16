import { ICompany } from 'pages/Company/types';
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
import { IModalImportUserActions } from './types';
import { Container, ContainerCreateData } from './styles';

const ModalImportUser: React.ForwardRefRenderFunction<IModalImportUserActions> =
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [companySelected, setCompanySelected] = useState('');
    const [file, setFile] = useState<any>();

    useEffect(() => {
      const token = localStorage.getItem('ergonomic@token');
      api
        .get('company', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => setCompanies(response.data));
    }, []);

    function handleVisibleModal() {
      setIsVisible(oldValue => !oldValue);
    }

    useImperativeHandle(ref, () => ({ handleVisibleModal }));

    async function handleImport() {
      try {
        const token = localStorage.getItem('ergonomic@token');

        const form = new FormData();
        form.append('file', file[0]);

        await api.request({
          method: 'POST',
          url: 'register/import',
          headers: {
            'Content-Type':
              'multipart/form-data; boundary=---011000010111000001101001',
            Authorization: `Bearer ${token}`,
          },
          data: form,
        });
        handleVisibleModal();
      } catch (error) {
        toast.error('Erro ao importar novos usuários');
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
            {companies.map(company => (
              <option value={company.id}>{company.name}</option>
            ))}
          </select>

          <Button title="Importar" onPress={handleImport} />
        </ContainerCreateData>
      </Container>
    );
  };

export default forwardRef(ModalImportUser);
