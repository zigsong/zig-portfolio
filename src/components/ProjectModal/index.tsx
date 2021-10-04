import React from 'react';

import Styled from './styles';
import { ModalContent } from 'types';

interface Props {
  content: ModalContent;
}

const ProjectModal = ({ content }: Props) => {
  return <Styled.Root>{content.title}</Styled.Root>;
};

export default ProjectModal;
