import styled from '@emotion/styled';

import { GatsbyImage } from 'gatsby-plugin-image';

import { customMQ } from 'styles/theme';

export const ImgWrap = styled.div`
  width: 100%;
  height: 30rem;
  margin: 3rem 0 0;
  border-radius: 1rem;
  overflow: hidden;
  z-index: 0;

  ${customMQ} {
    width: 100%;
    height: auto;
  }
`;

export const Img = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  isolation: isolate;
`;
