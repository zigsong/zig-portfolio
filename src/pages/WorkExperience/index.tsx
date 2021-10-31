import React from 'react';

import Card from 'components/Card';
import LinkedTitle from 'components/LinkedTitle';
import WorkCard from 'components/WorkCard';
import ROUTES from 'constants/routes';
import works from './works';
import Styled from './styles';

const WorkExperience = () => {
  return (
    <Styled.Root>
      <LinkedTitle id={ROUTES.WORK} text="Work & Education" link={`/#${ROUTES.WORK}`} />
      <Card>
        <Styled.Container>
          {works.map((work) => (
            <Styled.CardWrapper key={work.id}>
              <WorkCard {...work} />
            </Styled.CardWrapper>
          ))}
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default WorkExperience;
