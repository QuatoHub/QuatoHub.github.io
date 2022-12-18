import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Layout/SEO';
import ContentImg from 'domains/post/ContentImg';
import DescriptionData from 'domains/post/Description';
import Markdown from 'domains/post/Content';
import Profile from 'components/Profile/Profile';
import Comment from 'domains/post/Comment';
import LatestPosts from 'domains/post/LatestPosts';

import { PostTemplateProps } from 'typings/index';

function PostTemplate({
  data: {
    posts: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      html,
      timeToRead,
      frontmatter: {
        title,
        summary,
        date,
        category,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];

  return (
    <>
      <SEO title={title} description={summary} cover={publicURL} />
      <ContentImg thumbnail={gatsbyImageData} />
      <DescriptionData
        title={title}
        date={date}
        category={category}
        time={timeToRead}
      />
      <Markdown html={html} />
      <Profile padding="7rem 0 4rem 0" />
      <Comment />
      <LatestPosts />
    </>
  );
}

export const profileQuery = graphql`
  query Post($slug: String) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          id
          html
          timeToRead
          frontmatter {
            title
            summary
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 730)
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
