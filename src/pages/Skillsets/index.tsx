import React from 'react';

import ROUTES from 'constants/routes';
import Card from 'components/Card';
import LinkedTitle from 'components/LinkedTitle';
import Styled from './styles';
import html5Img from 'assets/interest/html5.png';
import css3Img from 'assets/interest/css3.png';
import javascriptImg from 'assets/interest/javascript.png';
import typescriptImg from 'assets/interest/typescript.png';
import reactjsImg from 'assets/interest/reactjs.png';
import webpackImg from 'assets/interest/webpack.png';
import scImg from 'assets/interest/styled-components.png';
import rtlImg from 'assets/interest/rtl.png';
import nextjsImg from 'assets/interest/nextjs.png';

const Skillsets = () => {
  return (
    <Styled.Root>
      <LinkedTitle id={ROUTES.SKILLSET} text="Skillsets" link={`/#${ROUTES.SKILLSET}`} />
      <Card>
        <Styled.Container>
          <Styled.MainStacksContainer>
            <Styled.StackWrapper>
              <img src={html5Img} alt="html5" />
              <span className="stack-title">HTML5</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={css3Img} alt="css3" />
              <span className="stack-title">CSS3</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={javascriptImg} alt="javascript" />
              <span className="stack-title">JavaScript</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={typescriptImg} alt="typescript" />
              <span className="stack-title">TypeScript</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={reactjsImg} alt="react" />
              <span className="stack-title">React</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={nextjsImg} alt="next" />
              <span className="stack-title">Next.js</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={scImg} alt="styled-components" />
              <span className="stack-title">styled-components</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={rtlImg} alt="react-testing-library" />
              <span className="stack-title">react-testing-library</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={webpackImg} alt="webpack" />
              <span className="stack-title">webpack</span>
            </Styled.StackWrapper>
          </Styled.MainStacksContainer>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Skillsets;
