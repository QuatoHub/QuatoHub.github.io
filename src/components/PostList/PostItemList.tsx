import React from 'react';

import { PostItemListWrap } from './PostItemList.style';

import PostItem from './PostItem';

import { ContentProps, PostItemListProps } from 'typings/index';

function PostItemList({ posts }: PostItemListProps) {
  return (
    <PostItemListWrap>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            timeToRead,
            frontmatter,
          },
        }: ContentProps) => (
          <PostItem {...frontmatter} link={slug} key={id} time={timeToRead} />
        ),
      )}
    </PostItemListWrap>
  );
}

export default PostItemList;
