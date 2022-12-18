import React from 'react';

import SEO from 'components/Layout/SEO';
import NotFound from 'domains/404/NotFound';

function NotFoundPage() {
  return (
    <>
      <SEO title="404 | Quato's Devlog" />
      <NotFound />
    </>
  );
}

export default NotFoundPage;
