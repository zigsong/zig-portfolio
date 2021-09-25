import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  transform: translateY(15px);
  z-index: 10;

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
    background-color: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
    width: 100%;
    height: 10px;
    border-radius: 2px;
    z-index: 10;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 36px;
`;

export default { Root, Title };
