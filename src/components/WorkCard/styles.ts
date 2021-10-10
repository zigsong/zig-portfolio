import styled, { css } from 'styled-components';

import TechChip from 'components/TechChip';
import PALETTE from 'constants/palette';

const Root = styled.div``;

const Container = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 4px;
  margin-bottom: 12px;
  overflow: hidden;
  filter: drop-shadow(0 0 0.35rem rgba(0, 0, 0, 0.15));

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileContent = styled.div`
  max-width: 152px;
`;

const Title = styled.h3`
  font-size: 20px;
  width: 100%;
`;

const Period = styled.p`
  color: ${PALETTE.DEFAULT_GRAY};
`;

const Tree = styled.div`
  margin-left: 4rem;
  width: 2px;
  min-height: 100%;
  background: ${PALETTE.DEFAULT_GRAY};
`;

const branchDot = css`
  content: '';
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid ${PALETTE.DEFAULT_GRAY};
  width: 9px;
  height: 9px;
  transform: translateY(-50%);
`;

const Branch = styled.div`
  background: ${PALETTE.DEFAULT_GRAY};
  width: 28px;
  height: 2px;
  position: relative;
  transform: translateY(1rem);

  &::after {
    ${branchDot}
    display: inline-block;
    right: -38%;
  }
`;

const Content = styled.div`
  margin-left: 56px;
  margin-bottom: 0.5rem;

  & a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CategoryTitle = styled.div`
  width: fit-content;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  padding: 0 4px;
  margin-bottom: 4px;

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
  color: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
  padding: 2px 8px;
  margin: 0 2px;
`;

const CheckList = styled.ul`
  & > li {
    &::before {
      content: '✔️';
      margin-right: 2px;
    }
  }
`;

export default {
  Root,
  Container,
  ImageWrapper,
  ProfileContent,
  Title,
  Period,
  Tree,
  Branch,
  Content,
  CategoryTitle,
  StacksContainer,
  CheckList,
};
