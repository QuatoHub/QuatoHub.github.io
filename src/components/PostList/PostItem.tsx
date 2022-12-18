import React from 'react';

import {
  PostItemWrap,
  PostCard,
  CardTitle,
  CardSummary,
  CardDescription,
} from './PostItem.style';

import ThumbnailImg from './Thumbnail';

import { PostItemProps } from 'typings/index';

function PostItem({
  title,
  date,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
  time,
}: PostItemProps) {
  return (
    <PostItemWrap to={link}>
      <PostCard>
        <CardTitle>{title}</CardTitle>
        <CardSummary>{summary}</CardSummary>
        <CardDescription>
          {date} &middot; {time} min read
        </CardDescription>
      </PostCard>
      <ThumbnailImg thumbnail={gatsbyImageData} />
    </PostItemWrap>
  );
}

export default PostItem;
