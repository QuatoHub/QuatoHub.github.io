import styled from '@emotion/styled';

import { Link } from 'gatsby';

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 8rem 0 0;
`;

export const ArrowIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;

  :hover {
    background-color: ${props => props.theme.colors.lightgray05};
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: ${props => props.theme.colors.text10};
  }
`;

export const PageNum = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  margin: 0 1.2rem;

  :hover {
    background-color: ${props => props.theme.colors.lightgray05};
  }

  &.active {
    color: ${props => props.theme.colors.white10};
    background-color: ${props => props.theme.colors.primary10};
  }
`;
