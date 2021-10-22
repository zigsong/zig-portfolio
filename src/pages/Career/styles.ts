import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  padding: 20px 16px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Tree = styled.div`
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: ${PALETTE.DEFAULT_GRAY};
`;

export default { Root, Container, Tree };
