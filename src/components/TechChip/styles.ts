import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.div`
  background: ${PALETTE.DEFAULT_WHITE};
  color: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
  font-weight: 700;
  text-align: center;
  padding: 2px 12px;
  margin: 4px;
  border: 1px solid ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
  border-radius: 25px;
`;

export default { Root };
