import React from 'react';
import { HashLink } from 'react-router-hash-link';

import linkSvg from 'assets/link.svg';
import Styled from './styles';

interface Props {
  text: string;
  link: string;
  id: string;
}

const LinkedTitle = ({ text, link, id }: Props) => {
  return (
    <Styled.Root id={id}>
      <HashLink smooth to={link}>
        <img src={linkSvg} alt={`link-${text}`} />
      </HashLink>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Root>
  );
};

export default LinkedTitle;
