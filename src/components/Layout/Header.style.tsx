import styled from '@emotion/styled';

import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { customMQ } from 'styles/theme';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.white10};
  transition: box-shadow 0.5s;

  &.scrolled {
    box-shadow: 0 0 1.2rem ${props => props.theme.colors.darkgray03};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70rem;
  height: 6rem;
  ${customMQ} {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const LogoWrap = styled(Link)`
  width: 20rem;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;

  :hover {
    color: ${props => props.theme.colors.primary10};
  }
`;

export const NavItem = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
  margin: 0 0 0 5rem;

  :hover {
    color: ${props => props.theme.colors.primary10};
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: ${props => props.theme.colors.text10};
  }
`;
