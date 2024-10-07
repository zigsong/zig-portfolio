import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.h2<{ isShowing: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  transform: translateY(15px);
  z-index: 10;

  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transform: ${({ isShowing }) => (isShowing ? 'translateY(15px)' : 'translateY(4rem)')};
  transition: all 0.7s ease-in-out;

  & a {
    height: 28px;
    transition: transform 0.1s ease;

    & img {
      padding: 0 2px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 5px;
    left: 0;
    background-color: ${PALETTE.DEFAULT_GREEN};
    width: 100%;
    height: 10px;
    border-radius: 2px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 36px;
  z-index: 20;
`;

export default { Root, Title };
