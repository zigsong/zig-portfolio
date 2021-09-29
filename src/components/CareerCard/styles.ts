import styled, { css } from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ position }) => (position === 'left' ? 'row-reverse' : 'row')};
  margin-left: ${({ position }) => (position === 'left' ? 'unset' : '50%')};
  margin-right: ${({ position }) => (position === 'left' ? '50%' : 'unset')};
  gap: 1rem;
`;

const branchDot = css`
  content: '';
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid ${PALETTE.DEFAULT_GRAY};
  width: 12px;
  height: 13px;
  transform: translateY(-50%);
`;

const Branch = styled.div<{ position: 'left' | 'right' }>`
  background: ${PALETTE.DEFAULT_GRAY};
  width: 36px;
  height: 2px;
  position: relative;
  transform: translateY(2.5rem);

  &::after {
    ${branchDot}
    display: ${({ position }) => (position === 'left' ? 'none' : 'inline-block')};
    right: -45%;
  }

  &::before {
    ${branchDot}
    display: ${({ position }) => (position === 'left' ? 'inline-block' : 'none')};
    left: -45%;
  }
`;

const CardContainer = styled.div`
  background: ${PALETTE.DEFAULT_WHITE};
  width: 100%;
  border-radius: 8px;
  padding: 1rem;
`;

const ContentContainer = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ position }) => (position === 'left' ? 'row-reverse' : 'row')};
`;

const ImageWrapper = styled.div<{ position: 'left' | 'right' }>`
  border-radius: 4px;
  filter: drop-shadow(0 0 0.35rem rgba(0, 0, 0, 0.15));
  width: 48px;
  height: 48px;
  margin-left: ${({ position }) => (position === 'left' ? '12px' : 0)};
  margin-right: ${({ position }) => (position === 'left' ? 0 : '12px')};

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div<{ position: 'left' | 'right' }>`
  * {
    text-align: ${({ position }) => (position === 'left' ? 'right' : 'left')};
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 4px;
`;

const Period = styled.div`
  color: ${PALETTE.DEFAULT_GRAY};
`;

export default {
  Root,
  Branch,
  CardContainer,
  ContentContainer,
  ImageWrapper,
  Content,
  Title,
  Period,
};
