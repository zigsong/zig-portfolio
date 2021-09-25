import React from 'react';

import LinkedTitle from 'components/LinkedTitle';
import Card from 'components/Card';
import profileImg from 'assets/profile.png';
import phoneSvg from 'assets/phone.svg';
import emailSvg from 'assets/email.svg';
import githubSvg from 'assets/github.svg';
import pencilSvg from 'assets/pencil.svg';
import ROUTES from 'constants/routes';
import Styled from './styles';

const About = () => {
  return (
    <Styled.Root>
      <LinkedTitle text={'About'} link={`/${ROUTES.ABOUT}`} />
      <Card>
        <Styled.Container>
          <Styled.Contact>
            <h3>Contact</h3>
            <div>
              <div className="about-row">
                <img src={phoneSvg} alt="phone" />
                <span>010-2595-5764</span>
              </div>
              <div className="about-row">
                <img src={emailSvg} alt="email" />
                <a href="mailto:wldms5764@gmail.com">wldms5764@gmail.com</a>
              </div>
            </div>
          </Styled.Contact>
          <Styled.Profile>
            <img src={profileImg} alt="profile" />
          </Styled.Profile>
          <Styled.Archive>
            <h3>Archive</h3>
            <div>
              <div className="about-row">
                <img src={githubSvg} alt="github" />
                <a href="https://github.com/zigsong">https://github.com/zigsong</a>
              </div>
              <div className="about-row">
                <img src={pencilSvg} alt="blog" />
                <a href="https://zigsong.github.io/">https://zigsong.github.io/</a>
              </div>
            </div>
          </Styled.Archive>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default About;
