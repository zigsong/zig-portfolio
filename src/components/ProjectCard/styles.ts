import styled from 'styled-components';

import TechChip from 'components/TechChip';
import PALETTE from 'constants/palette';

const Root = styled.div`
  min-width: 376px;
  width: 100%;
  height: 274px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  & > a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
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
  }
`;

const Content = styled.div`
  width: 100%;
  height: 50%;
  padding: 1rem 1.5rem;
  position: absolute;
  bottom: 0;
  background: rgba(51, 51, 51, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 0 0 4px 4px;

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
  margin-top: 8px;
  height: 28px;
  overflow-y: hidden;
`;

export const Stack = styled(TechChip)`
  display: inline-block;
  font-size: 12px;
  color: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
  padding: 2px 6px;
  margin: 2px;
`;

export default { Root, Container, ImageWrapper, Content, Title, Description, StacksContainer };