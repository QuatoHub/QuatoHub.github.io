import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import PostItemList from 'components/PostList/PostItemList';

import { LatestPostsProps } from 'typings/index';

function LatestPosts() {
  const { posts } = useStaticQuery<LatestPostsProps>(
    graphql`
      query {
        posts: allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
          limit: 3
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
      }
    `,
  );

  return (
    <>
      <LatestPostsLabel>Latest Posts</LatestPostsLabel>
      <PostItemList posts={posts.edges} />
    </>
  );
}

const LatestPostsLabel = styled.p`
  padding: 5rem 0 2rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  cursor: default;
`;

export default LatestPosts;
