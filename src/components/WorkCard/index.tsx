import React from 'react';

import Styled, { Stack } from './styles';

interface Props {
  image: string;
  title: string;
  period: string;
  intro: string;
  stacks: string[];
  mains: string[];
  learnings: string[];
  site: string;
}

const WorkCard = ({ image, title, period, intro, stacks, mains, learnings, site }: Props) => {
  return (
    <Styled.Root>
      <Styled.Container>
        <div>
          <Styled.ImageWrapper>
            <img src={image} alt={title} />
          </Styled.ImageWrapper>
          <Styled.ProfileContent>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Period>{period}</Styled.Period>
          </Styled.ProfileContent>
        </div>
        <Styled.Tree />
        <div>
          <div>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>서비스 소개</Styled.CategoryTitle>
              <div>{intro}</div>
            </Styled.Content>
          </div>
          <div>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>사용 스택</Styled.CategoryTitle>
              <Styled.StacksContainer>
                {stacks.map((stack, idx) => (
                  <li key={idx}>
                    <Stack key={idx} text={stack} />
                  </li>
                ))}
              </Styled.StacksContainer>
            </Styled.Content>
          </div>
          <div>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>주요 업무</Styled.CategoryTitle>
              <Styled.CheckList>
                {mains.map((main, idx) => (
                  <li key={idx}>{main}</li>
                ))}
              </Styled.CheckList>
            </Styled.Content>
          </div>
          <div>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>배운 점 & 어려웠던 점</Styled.CategoryTitle>
              <Styled.CheckList>
                {learnings.map((learning, idx) => (
                  <li key={idx}>{learning}</li>
                ))}
              </Styled.CheckList>
            </Styled.Content>
          </div>
          <div>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>사이트</Styled.CategoryTitle>
              <div>{site}</div>
            </Styled.Content>
          </div>
        </div>
      </Styled.Container>
    </Styled.Root>
  );
};

export default WorkCard;
