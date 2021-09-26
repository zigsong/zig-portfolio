import styled, { keyframes } from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  max-height: 32rem;
  padding: 2rem;
  margin-top: 20px;

  * {
    font-family: 'D2 Coding', sans-serif;
    color: ${PALETTE.CMD_WHITE};
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  background-color: ${PALETTE.TERMINAL_BLACK};
  min-height: 20rem;
  border-radius: 12px;
  padding: 3rem 1rem;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.5));
`;

const DotButtonsContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const DotButton = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const CommandContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & img {
    width: 108px;
  }
`;

const Command = styled.span`
  * {
    font-size: 1.25rem;
  }
`;

const cursorBlinking = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity : 1;
  }
`;

const Cursor = styled.span`
  width: 2.5px;
  height: 1.45rem;
  background-color: ${PALETTE.PRIMARY_VIOLET_BG};
  animation: ${cursorBlinking} 0.8s infinite steps(2, end);
`;

const scaling = keyframes`
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
`;

const CursorButton = styled.button<{ isShowing: boolean }>`
  display: ${({ isShowing }) => (isShowing ? 'block' : 'none')};
  background-color: ${PALETTE.PRIMARY_VIOLET_BG};
  margin-left: 0.5rem;
  color: ${PALETTE.TERMINAL_BLACK};
  padding: 0.25rem 0.5rem;
  border: none;
  animation: ${scaling} 1s linear infinite;
`;

const LinesContainer = styled.div`
  margin-top: 1.5rem;
`;

const Line = styled.div`
  * {
    font-size: 1.25rem;
  }

  &::before {
    content: '>';
    display: inline-block;
    color: ${PALETTE.CMD_FUCHSIA};
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0.35rem;
  }
`;

export default {
  Root,
  Container,
  DotButtonsContainer,
  DotButton,
  CommandContainer,
  Command,
  Cursor,
  CursorButton,
  LinesContainer,
  Line,
};
