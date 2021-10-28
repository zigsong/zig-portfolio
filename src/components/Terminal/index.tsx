import React, { useEffect, useRef, useState } from 'react';

import PALETTE from 'constants/palette';
import terminalArrow from 'assets/terminal_arrow.svg';
import Styled from './styles';

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
          <Styled.Command>jieun</Styled.Command>
          <img src={terminalArrow} alt="terminal-arrow" />
          <Styled.Command>$ whoami</Styled.Command>
          <Styled.Cursor />
          <Styled.CursorButton isShowing={isCTAShowing} onClick={handleClickCTA}>
            ⬅️ Click Here!
          </Styled.CursorButton>
        </Styled.CommandContainer>
        {!isCTAShowing && (
          <Styled.LinesContainer>
            {currentLine >= 1 && (
              <Styled.Line>
                <span className="bold-text">협업의 가치를 알고 실천합니다.</span>
                <br />
                <span>
                  빨리 가려면 혼자 가고, 멀리 가려면 함께 가야 합니다. <br />
                  팀의 목표를 가장 중시하며, 항상 소통하며 의견을 주고받습니다.
                </span>
              </Styled.Line>
            )}
            {currentLine >= 2 && (
              <Styled.Line>
                <span className="bold-text">꾸준함의 힘을 믿습니다.</span>
                <br />
                <span>
                  매일 일기 쓰기 3년, 매일 운동하기 12년 차의 성실함을 살려 <br />
                  현재 매주 블로그 포스팅 1개 이상, 매일 개발 도서 읽기를 실천하고 있습니다.
                </span>
              </Styled.Line>
            )}
            {currentLine >= 3 && (
              <Styled.Line>
                <span className="bold-text">새로운 일에 도전합니다.</span>
                <br />
                <span>
                  컴포트 존(comfort zone)을 넘어 계속해서 새로운 분야에 도전합니다. <br />
                  최근에는 사용자를 위한 UX와 프론트엔드 성능 개선을 공부하고 있습니다.
                </span>
              </Styled.Line>
            )}
            {currentLine >= 4 && (
              <Styled.Line>
                <span className="bold-text">필요한 사람이 되고자 노력합니다.</span>
                <br />
                <span>
                  실력과 인간미를 모두 갖춘, 모두가 찾는 사람이 되고 싶습니다. <br />
                  주변 사람들에게 도움을 주는 개발자가 되고자 합니다.
                </span>
              </Styled.Line>
            )}
          </Styled.LinesContainer>
        )}
      </Styled.Container>
    </Styled.Root>
  );
};

export default Terminal;
