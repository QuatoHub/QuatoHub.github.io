import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import {
  HeaderWrap,
  Nav,
  LogoWrap,
  Logo,
  NavItem,
  NavIcon,
} from './Header.style';

import useScroll from 'hooks/useScroll';

import { BiCategoryAlt, BiBook, BiCool } from 'react-icons/bi';

type LogoProps = {
  logo: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

function Header() {
  const { logo } = useStaticQuery<LogoProps>(
    graphql`
      query {
        logo: file(name: { eq: "logo" }) {
          childImageSharp {
            gatsbyImageData(width: 210)
          }
        }
      }
    `,
  );

  const isScrolled = useScroll();

  return (
    <HeaderWrap className={isScrolled ? 'scrolled' : undefined}>
      <Nav>
        <LogoWrap to="/">
          <Logo>
            quatoHub.com
          </Logo>
        </LogoWrap>
        <NavItem>
          <NavIcon to="/about" aria-label="about">
            about
          </NavIcon>
          <NavIcon to="/category" aria-label="category">
            category
          </NavIcon>
        </NavItem>
      </Nav>
    </HeaderWrap>
  );
}

export default Header;
