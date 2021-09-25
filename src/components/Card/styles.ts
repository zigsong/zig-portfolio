import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.div`
  background: ${PALETTE.DEFAULT_WHITE};
  padding: 32px 80px;
  border-radius: 8px;
  max-width: 840px;
  width: 100%;
  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.15));
`;

export default { Root };
