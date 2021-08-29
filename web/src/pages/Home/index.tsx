import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { homeData, HomeDataProps } from './data';
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
      <h2>Olá, Lucas Coronel</h2>

      <section>
        <div>
          {homeData.map((item: HomeDataProps) => (
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
