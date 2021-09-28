import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  padding: 20px 0 48px;
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    background: ${PALETTE.PRIMARY_VIOLET_HIGHLIGHT};
    border-radius: 12px;
  }

  & article {
    margin: 0 0.5rem;
  }
`;

export default { Root, Container };
