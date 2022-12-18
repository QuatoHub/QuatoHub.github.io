import React from 'react';

import SEO from 'components/Layout/SEO';
import Profile from 'components/Profile/Profile';
import CategoryList from 'domains/category/CategoryList';

function category() {
  return (
    <>
      <SEO title="Category | Quato's Devlog" />
      <Profile padding="6rem 0 1rem" />
      <CategoryList />
    </>
  );
}

export default category;
