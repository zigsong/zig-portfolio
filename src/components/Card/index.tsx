import React from 'react';

import Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <Styled.Root>{children}</Styled.Root>;
};

export default Card;
