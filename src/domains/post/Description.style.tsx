import styled from '@emotion/styled';

import { Link } from 'gatsby';

export const ContentTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  font-size: 3rem;
  font-weight: 700;
  padding: 2.5rem 0;
  line-height: 130%;
`;

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentDate = styled.span`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.darkgray07};
`;

export const ContentCategory = styled(Link)`
  padding: 0.4rem;
  border-radius: 0.3rem;
  background: ${props => props.theme.colors.text10};
  color: ${props => props.theme.colors.white10};
  font-size: 1.3rem;
  font-weight: 700;

  :hover {
    background: ${props => props.theme.colors.primary10};
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 0.1rem solid ${props => props.theme.colors.lightgray05};
  margin: 1.5rem 0;
`;
