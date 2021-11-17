import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.div<{ isShowing: boolean }>`
  background: ${PALETTE.DEFAULT_WHITE};
  padding: 32px 80px;
  border-radius: 8px;
  max-width: 960px;
  width: 100%;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.15));

  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transform: ${({ isShowing }) => (isShowing ? 'translateY(0)' : 'translateY(4rem)')};
  transition: all 0.7s ease-in-out;
`;

export default { Root };
