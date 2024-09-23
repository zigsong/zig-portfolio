import React, { useEffect, useRef, useState } from 'react';

import PALETTE from 'constants/palette';
import terminalArrow from 'assets/terminal_arrow.svg';
import Styled from './styles';

const Terminal = () => {
  const [isCTAShowing, setCTAShowing] = useState(false);
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

  useEffect(() => {
    printLines();
  }, []);

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
          {/* <Styled.CursorButton isShowing={isCTAShowing} onClick={handleClickCTA}>
            ⬅️ Click Here!
          </Styled.CursorButton> */}
        </Styled.CommandContainer>
        {/* {!isCTAShowing && ( */}
        <Styled.LinesContainer>
          {currentLine >= 1 && (
            <Styled.Line>
              <span className="bold-text">협업의 가치를 알고 실천합니다.</span>
              <br />
              <span>
                빨리 가려면 혼자 가고, 멀리 가려면 함께 가야 합니다. <br />
                팀의 목표를 중시하며, 함께 공유하고 소통하는 분위기를 만들어갑니다.
              </span>
            </Styled.Line>
          )}
          {currentLine >= 2 && (
            <Styled.Line>
              <span className="bold-text">꾸준함의 힘을 믿습니다.</span>
              <br />
              <span>
                매일 일기 쓰기 8년, 매일 영어 공부 3년, 매주 블로그 포스팅 4년 등 <br />
                주변 사람들에게도 인정받는 꾸준함의 대가입니다.
              </span>
            </Styled.Line>
          )}
          {currentLine >= 3 && (
            <Styled.Line>
              <span className="bold-text">사용자를 우선으로 생각하며, 약속을 반드시 지킵니다.</span>
              <br />
              <span>
                사용자에게 좋은 서비스를 제공하겠다는 책임감으로 코딩을 넘어선 프로덕트의 관점에서
                생각합니다. <br />
                스스로와의 약속, 팀원과의 신뢰를 깨지 않으며 주어진 문제는 반드시 해결합니다.
              </span>
            </Styled.Line>
          )}
          {currentLine >= 4 && (
            <Styled.Line>
              <span className="bold-text">필요한 사람이 되고자 노력합니다.</span>
              <br />
              <span>
                실력과 인간미를 모두 갖춘, 모두가 찾는 사람이 되고 싶습니다. <br />
                주변 사람들에게 도움을 주는, 선물 같은 개발자가 되고자 합니다.
              </span>
            </Styled.Line>
          )}
        </Styled.LinesContainer>
        {/* )} */}
      </Styled.Container>
    </Styled.Root>
  );
};

export default Terminal;
