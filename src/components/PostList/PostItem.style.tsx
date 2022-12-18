import styled from '@emotion/styled';

import { Link } from 'gatsby';

import { customMQ } from 'styles/theme';

export const PostItemWrap = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 1.5rem;
  padding: 1.7rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.4rem ${props => props.theme.colors.black02};
  transition: 0.3s box-shadow;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0.6rem ${props => props.theme.colors.black04};
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
  }

  :nth-last-of-type(1) {
    margin: 0;
  }

  ${customMQ} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const PostCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.7rem 0 0;
`;

export const CardTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 2rem;
  font-weight: 700;
  line-height: 140%;

  ${customMQ} {
    -webkit-line-clamp: 3;
  }
`;

export const CardSummary = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 130%;
  margin: 1.3rem 0;

  ${customMQ} {
    -webkit-line-clamp: 3;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.darkgray07};
`;
