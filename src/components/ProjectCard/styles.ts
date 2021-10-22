import styled from 'styled-components';

import TechChip from 'components/TechChip';
import PALETTE from 'constants/palette';

const Root = styled.div`
  min-width: 480px;
  width: 100%;
  height: 324px;
  border-radius: 4px;
  border: 1px solid ${PALETTE.BORDER_GRAY};
  position: relative;
  overflow: hidden;

  & > .card-modal-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease;
    object-fit: cover;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 50%;
  padding: 1rem 1.5rem;
  position: absolute;
  bottom: 0;
  background: rgba(51, 51, 51, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;

  & * {
    color: ${PALETTE.DEFAULT_WHITE};
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 2px;
`;

const Description = styled.p`
  white-space: pre-line;
`;

const StacksContainer = styled.ul`
  margin-top: auto;
  height: 28px;
  overflow-y: hidden;

  & li {
    display: inline-block;
  }
`;

export const Stack = styled(TechChip)`
  font-size: 12px;
  color: ${PALETTE.PRIMARY_VIOLET_TEXT};
`;

export default { Root, Container, ImageWrapper, Content, Title, Description, StacksContainer };
