import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  padding: 20px 16px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${PALETTE.DEFAULT_BUTTER};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin: 0 -2rem;
  padding: 2rem 0 1rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: ${PALETTE.DEFAULT_GREEN};
    border-radius: 12px;
  }

  & article {
    margin: 0 0.5rem;
  }
`;

export default { Root, Container };
