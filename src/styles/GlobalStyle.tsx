import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { customMQ } from './theme';

const style = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  html {
    color: rgba(41, 40, 45, 1);
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-weight: 400;
    font-size: 62.5%;
    letter-spacing: -0.2px;

    ${customMQ} {
      font-size: 50%;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(98, 92, 96, 0.7);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(241, 237, 233, 0.5);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  ::selection {
    background-color: rgba(104, 104, 172, 0.8);
    color: rgba(255, 255, 255, 1);
  }
`;

const GlobalStyle = function () {
  return <Global styles={style} />;
};

export default GlobalStyle;
