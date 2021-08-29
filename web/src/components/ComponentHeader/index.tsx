import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { ComponentHeaderProps } from './types';
import { Container } from './styles';

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ buttomBack }) => (
  <Container>
    {buttomBack && (
      <Link to="/home">
        <FiArrowLeft size={30} color="000" />
      </Link>
    )}

    <h2>Olá, Lucas Coronel</h2>
  </Container>
);

export default ComponentHeader;
