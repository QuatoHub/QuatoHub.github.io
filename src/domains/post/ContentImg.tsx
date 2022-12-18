import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { ImgWrap, Img } from './ContentImg.style';

function ContentImg({ thumbnail }: { thumbnail: IGatsbyImageData }) {
  return (
    <ImgWrap>
      <Img image={thumbnail} alt="thumbnail" />
    </ImgWrap>
  );
}

export default ContentImg;
