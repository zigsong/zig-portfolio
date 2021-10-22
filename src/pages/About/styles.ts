import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.section`
  padding: 20px 16px 48px;
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Profile = styled.div`
  margin: 0 12px;
`;

const Contact = styled.div`
  text-align: right;

  & h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    width: fit-content;
    margin-left: auto;
    border-bottom: 1px solid ${PALETTE.TERMINAL_BLACK};
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  & .about-row {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;

    &:first-of-type {
      margin-bottom: 8px;
    }

    & img {
      margin: 0 4px;
    }

    & a {
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Archive = styled.div`
  & h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    width: fit-content;
    border-bottom: 1px solid ${PALETTE.TERMINAL_BLACK};
  }

  & .about-row {
    display: flex;
    align-items: center;
    gap: 4px;

    &:first-of-type {
      margin-bottom: 8px;
    }

    & img {
      margin: 0 4px;
    }

    & a {
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default { Root, Container, Profile, Contact, Archive };
