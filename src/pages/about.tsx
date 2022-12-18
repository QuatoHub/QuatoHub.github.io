import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/Layout/SEO';
import Greeting from 'domains/about/Introduce';
import Resume from 'domains/about/Resume';
import { AboutProps } from 'typings/index';

function AboutPage({ data: { resume } }: AboutProps) {
  return (
    <>
      <SEO title="About | Quato's Devlog" />
      <Greeting />
      <Resume resume={resume.childrenMarkdownRemark[0].html} />
    </>
  );
}

export const aboutQuery = graphql`
  {
    resume: file(name: { eq: "resume" }) {
      childrenMarkdownRemark {
        html
      }
    }
  }
`;

export default AboutPage;
