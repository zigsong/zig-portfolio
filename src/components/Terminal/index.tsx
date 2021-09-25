import React, { useEffect, useRef, useState } from 'react';

import PALETTE from 'constants/palette';
import terminalArrow from 'assets/terminal_arrow.svg';
import Styled from './styles';

// REFACTOR: 컴포넌트 전체 리렌더링 방지
const Terminal = () => {
  const [isCTAShowing, setCTAShowing] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const intervalId = useRef<NodeJS.Timeout>();

  const handleClickCTA = () => {
    setCTAShowing(false);
    printLines();
  };

  const printLines = () => {
    if (intervalId.current) clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      setCurrentLine((currentLine) => currentLine + 1);
    }, 500);
  };

  useEffect(() => {
    if (currentLine === 4) {
      clearInterval(intervalId.current);
    }
  }, [currentLine]);

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.DotButtonsContainer>
          <Styled.DotButton color={PALETTE.BUTTON_RED} />
          <Styled.DotButton color={PALETTE.BUTTON_YELLOW} />
          <Styled.DotButton color={PALETTE.BUTTON_GREEN} />
        </Styled.DotButtonsContainer>
        <Styled.CommandContainer>
          <Styled.Command> zig</Styled.Command>
          <img src={terminalArrow} alt="terminal-arrow" />
          <Styled.Command>$ whoami</Styled.Command>
          <Styled.Cursor />
          <Styled.CursorButton isShowing={isCTAShowing} onClick={handleClickCTA}>
            ⬅️ Click Here!
          </Styled.CursorButton>
        </Styled.CommandContainer>
        {!isCTAShowing && (
          <Styled.LinesContainer>
            {currentLine >= 1 && <Styled.Line>협업의 가치를 알고 실천합니다.</Styled.Line>}
            {currentLine >= 2 && <Styled.Line>꾸준함의 힘을 믿습니다.</Styled.Line>}
            {currentLine >= 3 && <Styled.Line>새로운 일에 도전합니다.</Styled.Line>}
            {currentLine >= 4 && <Styled.Line>필요한 사람이 되고자 힘씁니다.</Styled.Line>}
          </Styled.LinesContainer>
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default Terminal;
