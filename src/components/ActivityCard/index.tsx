import React from 'react';

import linkSvg from 'assets/link.svg';
import refSvg from 'assets/link.png';
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
          <a href={site} target="_blank">
            {site}
          </a>
          {more && (
            <div>
              <img src={refSvg} alt="더보기" />
              <a href={more} target="_blank">
                자세히 보기
              </a>
            </div>
          )}
        </Styled.Site>
      </Styled.Container>
    </Styled.Root>
  );
};

export default ActivityCard;
