import React from 'react';

import Card from 'components/Card';
import LinkedTitle from 'components/LinkedTitle';
import ROUTES from 'constants/routes';
import Styled from './styles';
import TechChip from 'components/TechChip';

const Skillsets = () => {
  return (
    <Styled.Root>
      <LinkedTitle text={'Skillsets'} link={`/${ROUTES.SKILLSET}`} />
      <Card>
        <Styled.Container>
          <Styled.Sortation>
            <h3>4~5점</h3>
            <p>자신있는 기술</p>
            <Styled.ChipsContainer>
              <TechChip text="HTML/CSS" />
              <TechChip text="JavaScript" />
              <TechChip text="TypeScript" />
              <TechChip text="React.js" />
            </Styled.ChipsContainer>
          </Styled.Sortation>
          <Styled.Sortation>
            <h3>3점~</h3>
            <p>프로젝트에 적용 가능한 기술</p>
            <Styled.ChipsContainer>
              <TechChip text="webpack" />
              <TechChip text="express" />
              <TechChip text="jest" />
              <TechChip text="mongoDB" />
            </Styled.ChipsContainer>
          </Styled.Sortation>
          <Styled.Sortation>
            <h3>1~2점</h3>
            <p>사용해본 기술</p>
            <Styled.ChipsContainer>
              <TechChip text="React Native" />
              <TechChip text="Vue.js" />
              <TechChip text="C++" />
              <TechChip text="Java" />
              <TechChip text="Django" />
              <TechChip text="Ruby-on-Rails" />
              <TechChip text="swift" />
            </Styled.ChipsContainer>
          </Styled.Sortation>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Skillsets;
