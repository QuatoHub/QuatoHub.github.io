import styled from '@emotion/styled';
import { device } from 'styles/theme';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ImgWrap = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    width: 25rem;
    height: 25rem;
    z-index: 0;
    > img {
      display: none;
      @media ${device.tablet} {
        display: block;
        width: 25rem;
        height: 25rem;
        object-fit: cover;
        isolation: isolate;
      }
    }
  }
`;
