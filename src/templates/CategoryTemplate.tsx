import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Layout/SEO';
import SelectedCategory from 'domains/category/SelectedCategory';
import PostItemList from 'components/PostList/PostItemList';
import CategoryList from 'domains/category/CategoryList';

import { CategoryTemplateProps } from 'typings/index';

function CategoryTemplate({
  data: {
    posts: { edges },
  },
  pageContext,
}: CategoryTemplateProps) {
  const { category, count } = pageContext;

  return (
    <>
      <SEO title={`${category} | Quato's Devlog`} />
      <SelectedCategory category={category} count={count} />
      <PostItemList posts={edges} />
      <CategoryList />
    </>
  );
}

export const categoryListQuery = graphql`
  query Category($category: String) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { in: [$category] } } }
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

export default CategoryTemplate;
