import styled from '@emotion/styled';

import { Link } from 'gatsby';

export const FooterWrap = styled.footer`
  position: relative;
  width: 100%;
  margin: 8rem auto 0;
  background-color: ${props => props.theme.colors.lightgray05};
  text-align: center;
`;

export const Nav = styled.nav`
  font-size: 1.5rem;
  padding: 4rem;
`;

export const NavItem = styled(Link)`
  font-weight: 700;
  margin: 0 3rem 0 0;

  :hover {
    color: ${props => props.theme.colors.primary10};
  }

  :nth-last-of-type(1) {
    margin: 0;
  }
`;

export const Copyright = styled.p`
  font-size: 1.3rem;
  padding: 0 0 2rem;
  color: ${props => props.theme.colors.text10};
  cursor: default;

  a {
    color: ${props => props.theme.colors.primary10};
  }
`;
