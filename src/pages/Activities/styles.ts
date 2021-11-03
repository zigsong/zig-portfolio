import styled from 'styled-components';

const Root = styled.section`
  padding: 20px 16px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const CardWrapper = styled.div`
  width: 33%;
`;

export default { Root, Container, CardWrapper };
