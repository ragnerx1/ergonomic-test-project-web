import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { IHeaderModalProps } from './types';
import { Container } from './styles';

const HeaderModal: React.FC<IHeaderModalProps> = ({ onClick, title }) => (
  <Container className="header">
    <h2>{title}</h2>
    <button type="button" onClick={onClick}>
      <AiFillCloseCircle size={20} />
    </button>
  </Container>
);

export { HeaderModal };
