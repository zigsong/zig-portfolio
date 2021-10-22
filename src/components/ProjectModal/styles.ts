import styled from 'styled-components';

import PALETTE from 'constants/palette';
import TechChip from 'components/TechChip';

const Root = styled.section`
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
    border-radius: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 12px;
`;

const RepresentImageWrapper = styled.div``;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  & .content-wrapper {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 12px;

  & a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  & .preview {
    margin: auto;
    margin-bottom: 4px;
  }

  & div {
    white-space: pre-line;
  }

  & .learnings {
    padding-right: 0.5rem;

    & li {
      margin-bottom: 0.25rem;
    }
  }
`;

const CategoryTitle = styled.div`
  width: fit-content;
  position: relative;
  padding: 0 4px;
  margin-bottom: 4px;
  font-weight: 700;
  align-self: flex-start;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 4px;
    left: 0;
    background-color: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
    width: 100%;
    height: 6px;
    border-radius: 2px;
    z-index: -1;
  }
`;

const StacksContainer = styled.ul`
  & li {
    display: inline-block;
  }
`;

export const Stack = styled(TechChip)`
  display: inline-block;
  font-size: 12px;
  padding: 2px 6px;
  margin: 2px;
`;

const CheckList = styled.ul`
  & > li {
    &::before {
      content: '✔️';
      margin-right: 2px;
    }
  }
`;

const PreviewWrapper = styled.ul`
  & .preview-image {
    width: 480px;
    height: auto;
    margin: auto;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default {
  Root,
  Container,
  Title,
  RepresentImageWrapper,
  FlexContainer,
  Content,
  CategoryTitle,
  StacksContainer,
  CheckList,
  PreviewWrapper,
};
