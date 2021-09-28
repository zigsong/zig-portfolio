import React from 'react';

import Styled from './styles';

interface Props {
  text: string;
  className?: string;
}

const TechChip = ({ text, className }: Props) => {
  return <Styled.Root className={className}>{text}</Styled.Root>;
};

export default TechChip;
