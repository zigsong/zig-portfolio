import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  padding: 20px 0 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const Sortation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 33.3%;
  min-height: 100%;
  height: 100%;

  & h3 {
    font-size: 24px;
  }

  & p {
    color: ${PALETTE.DEFAULT_GRAY};
    font-size: 14px;
  }
`;

const ChipsContainer = styled.div`
  margin-top: 1rem;
`;

export default { Root, Container, Sortation, ChipsContainer };
