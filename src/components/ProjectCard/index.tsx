import ModalPortal from 'components/ModalPortal';
import ProjectModal from 'components/ProjectModal';
import React, { useState } from 'react';
import { ModalContent } from 'types';

import Styled, { Stack } from './styles';

interface Props {
  image: string;
  title: string;
  description: string;
  stacks: string[];
  modalContent: ModalContent;
}

const ProjectCard = ({ image, title, description, stacks, modalContent }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Styled.Root>
        <div className="card-modal-link" onClick={openModal}>
          <Styled.Container>
            <Styled.ImageWrapper>
              <img src={image} alt={title} />
            </Styled.ImageWrapper>
            <Styled.Content>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
              <Styled.StacksContainer>
                {stacks.map((stack, idx) => (
                  <Stack key={idx} text={stack} />
                ))}
              </Styled.StacksContainer>
            </Styled.Content>
          </Styled.Container>
        </div>
      </Styled.Root>
      <ModalPortal isOpen={isModalOpen} closeModal={closeModal}>
        <ProjectModal content={modalContent} />
      </ModalPortal>
    </>
  );
};

export default ProjectCard;
