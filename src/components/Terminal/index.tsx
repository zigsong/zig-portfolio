import React from 'react';

import PALETTE from 'constants/palette';
import terminalArrow from 'assets/terminal_arrow.svg';
import Styled from './styles';

const Terminal = () => {
  return (
    <Styled.Root>
      <Styled.DotButtonsContainer>
        <Styled.DotButton color={PALETTE.BUTTON_RED} />
        <Styled.DotButton color={PALETTE.BUTTON_YELLOW} />
        <Styled.DotButton color={PALETTE.BUTTON_GREEN} />
      </Styled.DotButtonsContainer>
      <Styled.CommandContainer>
        <Styled.Command> zig</Styled.Command>
        <img src={terminalArrow} alt="terminal-arrow" />
        <Styled.Command>zigsong $ whoami</Styled.Command>
        <Styled.Cursor />
        <Styled.CursorButton>⬅️ Click Here!</Styled.CursorButton>
      </Styled.CommandContainer>
    </Styled.Root>
  );
};

export default Terminal;
