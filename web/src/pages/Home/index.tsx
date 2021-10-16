import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '@components/Header';
import { homeData } from './data';
import { IHomeDataProps } from './types';
import { Container, ButtonCard } from './styles';

const Home: React.FC = () => {
  const { push } = useHistory();

  const handleNavigateTo = useCallback(
    (routeName: string) => {
      push(routeName);
    },
    [push],
  );

  return (
    <Container>
      <Header buttomBack={false} />

      <section>
        <div>
          {homeData.map((item: IHomeDataProps) => (
            <ButtonCard
              type="button"
              color={item.color}
              onClick={() => handleNavigateTo(item.route)}
            >
              <item.icon size={30} />
              <p>{item.title}</p>
            </ButtonCard>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
