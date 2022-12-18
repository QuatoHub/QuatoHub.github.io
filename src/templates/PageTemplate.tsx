import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Layout/SEO';
import Profile from 'components/Profile/Profile';
import PostItemList from 'components/PostList/PostItemList';
import Pagination from 'domains/page/Pagination';

import { PageTemplateProps } from 'typings/index';

function PageTemplate({
  data: {
    posts: { edges },
  },
  pageContext,
}: PageTemplateProps) {
  const { currentPage, numPages } = pageContext;

  return (
    <>
      <SEO />
      <Profile padding="6rem 0" />
      <PostItemList posts={edges} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}

export const pageQuery = graphql`
  query Page($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            summary
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 730)
              }
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
