import React from 'react';

import linkSvg from 'assets/link.svg';
import linkImg from 'assets/link.png';
import Styled from './styles';

interface Props {
  image: string;
  title: string;
  period: string;
  description: string;
  site: string;
  more?: string;
}

const ActivityCard = ({ image, title, period, description, site, more }: Props) => {
  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.ImageWrapper>
          <img src={image} />
        </Styled.ImageWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Period>{period}</Styled.Period>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Site>
          <img src={linkSvg} alt="사이트 바로가기" />
          <span>{site}</span>
        </Styled.Site>
        {more && (
          <Styled.More href={more}>
            <span>자세히 보기</span>
            <img src={linkImg} width="20px" alt="자세히 보기" />
          </Styled.More>
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default ActivityCard;
