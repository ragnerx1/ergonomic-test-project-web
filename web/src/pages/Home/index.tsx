import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '@components/Header';
import { homeData } from './data';
import { IHomeDataProps } from './types';
import { Container, ButtonCard } from './styles';

const Home: React.FC = () => {
  const { push } = useHistory();

  function handleNavigateTo(routeName: string) {
    push(routeName);
  }

  return (
    <Container>
      <Header buttomBack={false} />

      <section>
        <div>
          {homeData.map((item: IHomeDataProps) => (
            <ButtonCard
              key={item.id}
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
