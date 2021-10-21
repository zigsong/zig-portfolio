import styled from 'styled-components';

const Root = styled.section`
  padding: 20px 0 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 12px;
`;

const MainStacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 640px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  gap: 2.5rem;
`;

const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  & img {
    max-width: 96px;
    width: 100%;
    max-height: 96px;
    height: 100%;
    object-fit: cover;
  }

  & .stack-title {
    font-size: 18px;
    max-width: 108px;
    text-align: center;
    word-wrap: break-word;
    font-weight: 700;
  }
`;

export default {
  Root,
  Container,
  MainStacksContainer,
  StackWrapper,
};
