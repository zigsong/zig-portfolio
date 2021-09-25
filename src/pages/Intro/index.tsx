import React from 'react';
import { NavLink } from 'react-router-dom';

import ROUTES from 'constants/routes';
import PALETTE from 'constants/palette';
import Styled from './styles';

const navLinkActiveStyle = {
  borderBottom: `2px solid ${PALETTE.DEFAULT_WHITE}`,
  fontWeight: 700,
};

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
              <NavLink
                to={`/${ROUTES.ABOUT}`}
                activeStyle={navLinkActiveStyle}
                isActive={() => window.location.hash === ROUTES.ABOUT}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${ROUTES.SKILLSET}`}
                activeStyle={navLinkActiveStyle}
                isActive={() => window.location.hash === ROUTES.SKILLSET}
              >
                Skillsets
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${ROUTES.CAREER}`}
                activeStyle={navLinkActiveStyle}
                isActive={() => window.location.hash === ROUTES.CAREER}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${ROUTES.PROJECTS}`}
                activeStyle={navLinkActiveStyle}
                isActive={() => window.location.hash === ROUTES.PROJECTS}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${ROUTES.WORK}`}
                activeStyle={navLinkActiveStyle}
                isActive={() => window.location.hash === ROUTES.WORK}
              >
                Work Experience
              </NavLink>
            </li>
          </Styled.NavContainer>
        </nav>
      </Styled.Content>
    </Styled.Root>
  );
};

export default Intro;
