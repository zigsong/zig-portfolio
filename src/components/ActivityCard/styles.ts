import styled from 'styled-components';

import PALETTE from 'constants/palette';

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;

  & * {
    width: 100%;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  width: 138px;
  height: 138px;
  border-radius: 4px;
  margin-bottom: 12px;
  overflow: hidden;
  filter: drop-shadow(0 0 0.35rem rgba(0, 0, 0, 0.15));

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  white-space: pre-line;
  min-height: 3.5rem;
`;

const Period = styled.div`
  color: ${PALETTE.DEFAULT_GRAY};
`;

const Description = styled.p`
  margin-top: 0.5rem;
`;

const Site = styled.span`
  margin-top: 0.5rem;
  overflow: hidden;
  word-break: break-all;

  & a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  & img {
    width: 1rem;
    height: 1rem;
    margin-right: 4px;
    vertical-align: middle;
  }
`;

const More = styled.a`
  margin-top: 0.5rem;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }

  & img {
    width: unset;
    margin-left: 4px;
    vertical-align: middle;
  }
`;

export default { Root, Container, ImageWrapper, Title, Period, Description, Site, More };
