import React, { createRef, useEffect } from 'react';
import styled from '@emotion/styled';

import { CommentProps } from 'typings/index';

function Comment() {
  const src = 'https://utteranc.es/client.js';
  const repo = 'mnxmnz/mnxmnz.github.io';
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');
    const attributes: CommentProps = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return <CommentWrap ref={element} />;
}

const CommentWrap = styled.div`
  padding: 6rem 0 2rem;
`;

export default Comment;
