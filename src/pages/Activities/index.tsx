import React from 'react';

import ROUTES from 'constants/routes';
import LinkedTitle from 'components/LinkedTitle';
import Card from 'components/Card';
import ActivitiyCard from 'components/ActivityCard';
import activities from './activities';
import Styled from './styles';

const Activities = () => {
  return (
    <Styled.Root>
      <LinkedTitle id={ROUTES.ACTIVITIES} text="Activities" link={`/#${ROUTES.ACTIVITIES}`} />
      <Card>
        <Styled.Container>
          {activities.map((activity) => (
            <Styled.CardWrapper key={activity.id}>
              <ActivitiyCard {...activity} />
            </Styled.CardWrapper>
          ))}
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Activities;
