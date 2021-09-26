import React from 'react';
import { HashLink } from 'react-router-hash-link';

import ROUTES from 'constants/routes';
import Styled from './styles';

const Intro = () => {
  return (
    <Styled.Root>
      <Styled.Content>
        <Styled.IntroPannel>
          <Styled.TitleText>
            안녕하세요,
            <br />
            개발자 송지은입니다.
          </Styled.TitleText>
          <Styled.IntroText>
            <span className="bold">정</span>도 <span className="bold">고민</span>도{' '}
            <span className="bold">하고싶은 일</span>도 많습니다. <br />
            조금 느려도 지치지 않고 쉼없이 달리는 중입니다.
          </Styled.IntroText>
        </Styled.IntroPannel>
        <nav>
          <Styled.NavContainer>
            <li>
              <HashLink smooth to={`/#${ROUTES.ABOUT}`}>
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${ROUTES.SKILLSET}`}>
                Skillsets
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${ROUTES.CAREER}`}>
                Career
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${ROUTES.PROJECTS}`}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#${ROUTES.WORK}`}>
                Work Experience
              </HashLink>
            </li>
          </Styled.NavContainer>
        </nav>
      </Styled.Content>
    </Styled.Root>
  );
};

export default Intro;
