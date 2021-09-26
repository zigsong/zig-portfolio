import React from 'react';

import Styled from './styles';

interface Props {
  position: 'left' | 'right';
  title: string;
  period: string;
  image?: string;
}

const CareerCard = ({ position, title, period, image }: Props) => {
  return (
    <Styled.Root position={position}>
      <Styled.Branch position={position} />
      <Styled.CardContainer>
        <Styled.ContentContainer position={position}>
          {image && (
            <Styled.ImageWrapper position={position}>
              <img src={image} alt={title} />
            </Styled.ImageWrapper>
          )}
          <Styled.Content position={position}>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Period>{period}</Styled.Period>
          </Styled.Content>
        </Styled.ContentContainer>
      </Styled.CardContainer>
    </Styled.Root>
  );
};

export default CareerCard;
