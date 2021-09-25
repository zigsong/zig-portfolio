import React from 'react';
import { Link } from 'react-router-dom';

import linkSvg from 'assets/link.svg';
import Styled from './styles';

interface Props {
  text: string;
  link: string;
}

const LinkedTitle = ({ text, link }: Props) => {
  return (
    <Styled.Root>
      <Link to={link}>
        <img src={linkSvg} alt={`link-${text}`} />
      </Link>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Root>
  );
};

export default LinkedTitle;
