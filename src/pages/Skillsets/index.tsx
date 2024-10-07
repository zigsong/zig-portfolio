import React from 'react';

import ROUTES from 'constants/routes';
import Card from 'components/Card';
import LinkedTitle from 'components/LinkedTitle';
import Styled from './styles';
import javascriptImg from 'assets/interest/javascript.png';
import typescriptImg from 'assets/interest/typescript.png';
import reactjsImg from 'assets/interest/reactjs.png';
import webpackImg from 'assets/interest/webpack.png';
import nextjsImg from 'assets/interest/nextjs.png';
import nestjsImg from 'assets/interest/nestjs.png';
import flutterImg from 'assets/interest/flutter.png';
import viteImg from 'assets/interest/vite.png';

const Skillsets = () => {
  return (
    <Styled.Root>
      <LinkedTitle id={ROUTES.SKILLSET} text="Skillsets" link={`/#${ROUTES.SKILLSET}`} />
      <Card>
        <Styled.Container>
          <Styled.MainStacksContainer>
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
              <img src={webpackImg} alt="webpack" />
              <span className="stack-title">webpack</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={viteImg} alt="vite" />
              <span className="stack-title">vite</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={nestjsImg} alt="nestjs" />
              <span className="stack-title">Nest.js</span>
            </Styled.StackWrapper>
            <Styled.StackWrapper>
              <img src={flutterImg} alt="flutter" />
              <span className="stack-title">flutter</span>
            </Styled.StackWrapper>
          </Styled.MainStacksContainer>
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Skillsets;
