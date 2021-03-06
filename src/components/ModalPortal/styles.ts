import styled, { keyframes } from 'styled-components';

import PALETTE from 'constants/palette';

const fadein = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 10;
  animation: ${fadein} 0.2s;
`;

const ModalInner = styled.div`
  position: relative;
  margin: auto 2rem;
  display: inline-block;
  max-width: 960px;
  max-height: 660px;
  width: 100%;
  height: 100%;
  background-color: ${PALETTE.DEFAULT_WHITE};
  border-radius: 8px;
  padding: 2.75rem;
`;

const CrossMarkButton = styled.button`
  position: absolute;
  top: 0.35rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  transform: rotate(45deg);
`;

export default { ModalContainer, ModalInner, CrossMarkButton };
