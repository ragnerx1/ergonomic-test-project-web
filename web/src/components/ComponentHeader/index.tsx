/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { ComponentHeaderProps } from './types';
import { Container } from './styles';

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ buttomBack }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('ergonomic@name');
    setEmail(name!);
  }, []);

  return (
    <Container>
      {buttomBack && (
        <Link to="/home">
          <FiArrowLeft size={30} color="000" />
        </Link>
      )}

      <h2>
        Bem vindo(a),
        {` ${email}!`}
      </h2>
    </Container>
  );
};

export default ComponentHeader;
