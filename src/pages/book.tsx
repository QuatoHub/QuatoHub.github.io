import React from 'react';

import styled from '@emotion/styled';

import SEO from 'components/Layout/SEO';

function book() {
  return (
    <>
      <SEO title="Book | Quato's Devlog" />
      <Wrap>🚧 공사중입니다 🚧</Wrap>
    </>
  );
}

const Wrap = styled.div`
  margin: 15rem auto;
  font-size: 3rem;
`;

export default book;
