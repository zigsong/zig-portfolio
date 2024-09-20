import PALETTE from 'constants/palette';
import styled from 'styled-components';

const Root = styled.section`
  padding: 20px 16px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${PALETTE.DEFAULT_BUTTER};
`;

const Container = styled.div``;

const CardWrapper = styled.div`
  margin: 2rem 0;
`;

export default { Root, Container, CardWrapper };
