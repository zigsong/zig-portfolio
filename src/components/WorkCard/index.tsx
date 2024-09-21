import React, { ReactNode } from 'react';

import Styled, { Stack } from './styles';

interface Props {
  image: string;
  title: string;
  period: string;
  intro: string;
  stacks: string[];
  mains: string[];
  learnings: { title: string; desc: ReactNode }[];
  site: ReactNode;
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
          <Styled.ContentWrapper>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>서비스 소개</Styled.CategoryTitle>
              <div>{intro}</div>
            </Styled.Content>
          </Styled.ContentWrapper>
          <Styled.ContentWrapper>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>사용 기술</Styled.CategoryTitle>
              <Styled.StacksContainer>
                {stacks.map((stack, idx) => (
                  <li key={idx}>
                    <Stack key={idx} text={stack} />
                  </li>
                ))}
              </Styled.StacksContainer>
            </Styled.Content>
          </Styled.ContentWrapper>
          <Styled.ContentWrapper>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>주요 업무</Styled.CategoryTitle>
              <Styled.CheckList>
                {mains.map((main, idx) => (
                  <li key={idx}>{main}</li>
                ))}
              </Styled.CheckList>
            </Styled.Content>
          </Styled.ContentWrapper>
          <Styled.ContentWrapper>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>개발 경험</Styled.CategoryTitle>
              <Styled.WorkDetails>
                {learnings.map(({ title, desc }, idx) => (
                  <li key={idx}>
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                  </li>
                ))}
              </Styled.WorkDetails>
            </Styled.Content>
          </Styled.ContentWrapper>
          <Styled.ContentWrapper>
            <Styled.Branch />
            <Styled.Content>
              <Styled.CategoryTitle>사이트</Styled.CategoryTitle>
              {site}
            </Styled.Content>
          </Styled.ContentWrapper>
        </div>
      </Styled.Container>
    </Styled.Root>
  );
};

export default WorkCard;
