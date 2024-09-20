import styled, { css } from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  background-color: ${PALETTE.DEFAULT_BUTTER};
  height: 32rem;
  padding: 8rem 4rem;
`;

const Content = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const IntroPannel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
`;

const IntroText = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 2.5rem;

  & .bold {
    font-weight: 700;
  }
`;

export const hoverUnderline = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${PALETTE.TERMINAL_BLACK};
    transform-origin: bottom center;
    transition: transform 0.1s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  & a {
    color: ${PALETTE.TERMINAL_BLACK};
    font-size: 1.5rem;
    position: relative;

    ${hoverUnderline}
  }
`;

export default { Root, Content, IntroPannel, TitleText, IntroText, NavContainer };
