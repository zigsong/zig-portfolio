import React, { useState } from 'react';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

import Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  const [isCardShowing, setCardShowing] = useState(false);

  const targetElement = useIntersectionObserver(() => setCardShowing(!isCardShowing));

  return (
    <Styled.Root ref={targetElement} isShowing={isCardShowing}>
      {children}
    </Styled.Root>
  );
};

export default Card;
