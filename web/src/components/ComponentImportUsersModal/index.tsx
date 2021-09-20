/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

import { CompanyProps } from '../../pages/Company';
import api from '../../services/api';
import ComponentButton from '../ComponentButton';
import { Container, ContainerCreateData } from './styles';

interface Props {
  status: boolean;
  onPress(): void;
}

const ComponentImportUsersModal: React.FC<Props> = ({ status, onPress }) => {
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
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
      onPress();
    } catch (error) {
      toast.error('Erro ao importar novos usuários');
    }
  }

  return (
    <Container
      open={status}
      onClose={onPress}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ContainerCreateData>
        <section className="header">
          <h2>Importar usuários</h2>
          <button type="button" onClick={onPress}>
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

        <ComponentButton title="Importar" onPress={handleImport} />
      </ContainerCreateData>
    </Container>
  );
};

export default ComponentImportUsersModal;
