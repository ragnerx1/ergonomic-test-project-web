import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ComponentHeader from '../../components/ComponentHeader';
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
      <ComponentHeader buttomBack={false} />

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
