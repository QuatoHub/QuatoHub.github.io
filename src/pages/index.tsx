import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Layout/SEO';
import Profile from 'components/Profile/Profile';
import PostItemList from 'components/PostList/PostItemList';
import Pagination from 'domains/page/Pagination';

import { IndexProps } from 'typings/index';

function IndexPage({
  data: {
    posts: { edges },
    allSitePage: { pagination },
  },
}: IndexProps) {
  const {
    node: {
      pageContext: { currentPage, numPages },
    },
  } = pagination[0];

  return (
    <>
      <SEO />
      <Profile padding="6rem 0" />
      <PostItemList posts={edges} />
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}

export const indexQuery = graphql`
  {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      limit: 10
      skip: 1
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
    allSitePage(filter: { path: { eq: "/page/1" } }) {
      pagination: edges {
        node {
          pageContext
        }
      }
    }
  }
`;

export default IndexPage;
