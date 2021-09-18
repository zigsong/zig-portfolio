import styled, { keyframes } from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  position: relative;
  height: 32rem;
  background-color: ${PALETTE.TERMINAL_BLACK};
  padding: 3rem 1rem;

  * {
    font-family: 'D2 Coding', sans-serif;
    color: ${PALETTE.CMD_WHITE};
  }
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

const Command = styled.div`
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

const CursorButton = styled.button`
  background-color: ${PALETTE.PRIMARY_VIOLET_BG};
  margin-left: 0.5rem;
  color: ${PALETTE.TERMINAL_BLACK};
  padding: 0.25rem 0.5rem;
  border: none;
  animation: ${scaling} 1s linear infinite;
`;

export default {
  Root,
  DotButtonsContainer,
  DotButton,
  CommandContainer,
  Command,
  Cursor,
  CursorButton,
};
