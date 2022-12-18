import React from 'react';

import { LayoutWrap, Main } from './Layout.style';

import Header from './Header';
import Footer from './Footer';
import GlobalStyle from 'styles/GlobalStyle';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrap>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrap>
  );
}

export default Layout;
