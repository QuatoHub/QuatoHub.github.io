import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { MetaProps, SEOProps } from 'typings/index';

const SEO = ({ title, description, cover }: MetaProps) => {
  const { site, file } = useStaticQuery<SEOProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(name: { eq: "cover" }) {
          publicURL
        }
      }
    `,
  );

  const SEOTitle: string = title || site.siteMetadata.title;
  const SEODescription: string = description || site.siteMetadata.description;
  const SEOImg: string = cover || file.publicURL;

  return (
    <Helmet
      title={SEOTitle}
      meta={[
        {
          name: 'google-site-verification',
          content: 'ThKzC9Ke4fdkwmI6LxXq7CXp6FomQ2uSYoTVOORXL40',
        },
        {
          name: 'naver-site-verification',
          content: '2cc40621eb11418be5791db057b14a2d2cc2800c',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          httpEquiv: 'Content-Type',
          content: 'text/html; charset=UTF-8',
        },
        {
          httpEquiv: 'title',
          content: SEOTitle,
        },
        {
          name: 'description',
          content: SEODescription,
        },
        {
          name: 'keywords',
          content:
            'HTML, CSS, JavaScript, TypeScript, React, Nest.js, Gatsby, GitHub, BackEnd',
        },
        {
          name: 'author',
          content: '문현준'
        },
        {
          property: 'og:title',
          content: SEOTitle,
        },
        {
          property: 'og:description',
          content: SEODescription,
        },
        {
          property: 'og:image',
          content: SEOImg,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: "Quato's Devlog",
        },
        {
          name: 'twitter:title',
          content: SEOTitle,
        },
        {
          name: 'twitter:description',
          content: SEODescription,
        },
        {
          name: 'twitter:image',
          content: SEOImg,
        },
        {
          property: 'email',
          content: 'hyeonjun5256@gmail.com',
        },
        {
          httpEquiv: 'copyright',
          content: '문현준',
        },
        {
          name: 'theme-color',
          content: '#6868AC',
        },
      ]}
      htmlAttributes={{ lang: 'ko' }}
    />
  );
};

export default SEO;
