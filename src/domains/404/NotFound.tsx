import React from 'react';

import {
  NotFoundWrap,
  Warning,
  NotFoundDescription,
  GoToMain,
} from './NotFound.style';

function NotFound() {
  return (
    <NotFoundWrap>
      <Warning>404</Warning>
      <NotFoundDescription>
        찾을 수 없는 페이지입니다. <br />
      </NotFoundDescription>
      <GoToMain to="/">메인으로</GoToMain>
    </NotFoundWrap>
  );
}

export default NotFound;
