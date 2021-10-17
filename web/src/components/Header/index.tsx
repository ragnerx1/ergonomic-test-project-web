/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { IHeader } from './types';
import { Container } from './styles';

const Header: React.FC<IHeader> = ({ buttomBack }) => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');

  useEffect(() => setEmail(user.register.email), [user]);

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

export default Header;
