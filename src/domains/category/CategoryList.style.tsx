import styled from '@emotion/styled';

import { Link } from 'gatsby';

export const CategoryListWrap = styled.div`
  margin: 5rem 0 0;
  padding: 3rem 2rem;
  box-shadow: 0 0 0.4rem ${props => props.theme.colors.black02};
  border-radius: 1rem;
`;

export const CategoryLabel = styled.p`
  padding: 0 0 3rem 0;
  text-align: center;
  font-size: 1.5rem;
  cursor: default;
`;

export const Category = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.3rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.lightgray05};
  }

  :nth-last-of-type(1) {
    margin: 0;
  }
`;
