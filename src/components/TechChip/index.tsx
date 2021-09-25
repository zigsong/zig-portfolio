import React from 'react';

import Styled from './styles';

interface Props {
  text: string;
}

const TechChip = ({ text }: Props) => {
  return <Styled.Root>{text}</Styled.Root>;
};

export default TechChip;
