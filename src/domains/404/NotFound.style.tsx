import styled from '@emotion/styled';

import { Link } from 'gatsby';

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15rem 0;
  cursor: default;
`;

export const Warning = styled.p`
  font-size: 15rem;
  font-weight: 700;
`;

export const NotFoundDescription = styled.p`
  margin: 5rem 0;
  font-size: 2.5rem;
  text-align: center;
`;

export const GoToMain = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary10};
`;
