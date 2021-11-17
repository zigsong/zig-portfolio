import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import linkSvg from 'assets/link.svg';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Styled from './styles';

interface Props {
  text: string;
  link: string;
  id: string;
}

const LinkedTitle = ({ text, link, id }: Props) => {
  const [isShowing, setShowing] = useState(false);

  const targetElement = useIntersectionObserver(() => setShowing(!isShowing));

  return (
    <Styled.Root id={id} ref={targetElement} isShowing={isShowing}>
      <HashLink smooth to={link}>
        <img src={linkSvg} alt={`link-${text}`} />
      </HashLink>
      <Styled.Title>{text}</Styled.Title>
    </Styled.Root>
  );
};

export default LinkedTitle;
