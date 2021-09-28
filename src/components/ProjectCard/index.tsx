import React from 'react';

import Styled, { Stack } from './styles';

interface Props {
  image: string;
  title: string;
  description: string;
  stacks: string[];
}

const ProjectCard = ({ image, title, description, stacks }: Props) => {
  return (
    <Styled.Root>
      <a href="#">
        <Styled.Container>
          <Styled.ImageWrapper>
            <img src={image} alt={title} />
          </Styled.ImageWrapper>
          <Styled.Content>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
            <Styled.StacksContainer>
              {stacks.map((stack, idx) => (
                <Stack key={idx} text={stack} />
              ))}
            </Styled.StacksContainer>
          </Styled.Content>
        </Styled.Container>
      </a>
    </Styled.Root>
  );
};

export default ProjectCard;
